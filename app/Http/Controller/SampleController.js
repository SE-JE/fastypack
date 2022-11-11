import { dbConnection } from "../../../config/db.js";
import SampleModel from "../../Model/SampleModel.js";
import Controller from "./Controller.js";


class SampleController extends Controller {

    static async index(req, res) {
        const q_objection = await SampleModel.query().limit(1).first().debug();
        const q_knex = await dbConnection('users').first().debug();
        // const q_vAttr = (await SampleModel.query().limit(1).first().debug()).toJSON({ virtuals: ['virtual_attr'] });
        // const q_vAttrAfterFind = await SampleModel.query().limit(1).first().context({ virtuals: ['custom_virtual_attr'] }).debug();
        // const q_relation_mapping = await SampleModel.query().withGraphFetched({ sample_has_many: true }).limit(1).first().debug();
        // const q_join = await SampleModel.query().join('kelas_siswa', 'students.id', '=', 'kelas_siswa.siswa_id').limit(1).first().debug();


        return res.status(200).send({
            data: { q_knex, q_objection },
            message: 'success get data'
        });
    }

}


export default SampleController