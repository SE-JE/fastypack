const { Model } = require('objection');
const { dbConnection } = require('../../config/db');

Model.knex(dbConnection);

class User extends Model {
    static get tableName() {
        return 'users';
    }
}

module.exports = User;