import { Model } from 'objection';
import { dbConnection } from '../../config/db.js';

Model.knex(dbConnection);

class SampleModel extends Model {
    // static relationMappings = {
    //     sample_has_many: {
    //         relation: Model.HasManyRelation,
    //         modelClass: YourModel,
    //         join: {
    //             from: 'students.id',
    //             to: 'kelas_siswa.siswa_id'
    //         }
    //     }
    // };

    // static get virtualAttributes() {
    //     return ['autoload_virtual_attr'];
    // }

    // get autoload_virtual_attr() {
    //     return 'this is virtual attr wich autoloaded';
    // }

    // get virtual_attr() {
    //     return 'this is virtual attr (call on toJson)';
    // }

    // async $afterFind({ virtuals }) {
    //     if (virtuals.includes('custom_virtual_attr')) {
    //         this.custom_virtual_attr = 'this is virtual attr(loaded after find)';
    //     }
    // }

    // $formatJson(json) {
    //     json = super.$formatJson(json);
    //     delete json.password;
    //     return json;
    // }

    static get tableName() {
        return 'users';
    }
}

export default SampleModel;