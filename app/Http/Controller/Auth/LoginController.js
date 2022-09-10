
const User = require('../../../Model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();


class LoginController {
    static async login(req, res) {
        const { email, password } = req.body

        const user = await User.query().where({ email }).first();
        if (!user) return res.status(401).send({
            message: 'Email tidak terdaftar!'
        })

        const checkPassword = await bcrypt.compare(password, user.password)
        if (!checkPassword) return res.status(401).send({
            message: 'Password salah!'
        })

        const token = jwt.sign({
            id: user.id,
            email: user.email
        }, (process.env.KEY_APP ?? 'ThePrivateKey'), {
            expiresIn: '7d'
        })

        res.send({
            message: "Login berhasil",
            token
        })
    }
}

module.exports = LoginController