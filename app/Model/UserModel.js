import { Model } from 'objection';
import { dbConnection } from '../../config/db.js';

Model.knex(dbConnection);

class UserModel extends Model {
    static get tableName() {
        return 'users';
    }
}

export default UserModel;