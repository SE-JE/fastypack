const { Model } = require('objection');
const { dbConnection } = require('../../config/db');

Model.knex(dbConnection);

class UserModel extends Model {
    static get tableName() {
        return 'users';
    }
}

module.exports = UserModel;