
const Controller = require("./Controller");


class SampleController extends Controller {

    static async index(req, res) {
        return res.status(200).send({
            message: 'hello world'
        });
    }

}


module.exports = SampleController