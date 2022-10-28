import Controller from "./Controller.js";


class SampleController extends Controller {

    static async index(req, res) {
        return res.status(200).send({
            message: 'hello world'
        });
    }

}


export default SampleController