
const User = require('../../../Model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();


class RegisterController {
    static async reigister(req, res) {
        const { email, password, name } = req.body

        const salt = bcrypt.genSaltSync(10);
        const passwordHash = bcrypt.hashSync(password, salt);

        const register = await User.query().insert({
            email,
            name,
            password: passwordHash
        })
        console.log(register);

        const user = await User.query().where({ email }).first();

        const token = jwt.sign({
            id: user?.id,
            email: user?.email
        }, (process.env.KEY_APP ?? 'ThePrivateKey'), {
            expiresIn: '7d'
        })

        res.send({
            message: "reigister berhasil",
            token
        })
    }
}

module.exports = RegisterController