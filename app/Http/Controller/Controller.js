


class Controller {

    /* <===== sample =====>
        // validate req
        const isValid = super.validator(req, res, {
            emal: ['string', 'length:20']
        });
        if (!isValid) return;

    */
    static validator = (req, res, validations) => {
        // declare var
        const data = req.body;
        let invalids = {};

        // loop validations
        Object.keys(validations).map((keyValidation) => {
            const value = data?.[keyValidation];
            const validation = validations[keyValidation];

            if (!validation.includes('nullable') || value) {
                if (!value) {
                    invalids[keyValidation] = 'Field tidak boleh kosong';
                } else {
                    validation.map((validation) => {
                        const [validate, param] = String(validation).split(':');
                        switch (validate) {
                            case 'string':
                                if (typeof (value) != 'string') {
                                    invalids[keyValidation] = 'Harus bertipe string'
                                    return;
                                }
                                break;
                            case 'min':
                                if (value < param) {
                                    invalids[keyValidation] = `Tidak boleh kurang dari ${param}`
                                    return;
                                }
                                break;
                            case 'max':
                                if (value > param) {
                                    invalids[keyValidation] = `Tidak boleh lebih dari ${param}`
                                    return;
                                }
                                break;
                        }
                    });
                }
            }

        })

        // handle return
        if (Object.keys(invalids).length > 0) {
            res.status(422).send({
                message: invalids
            });
            return false;
        } else {
            return true;
        }
    }
}

module.exports = Controller