
/* import package */
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import UserModel from '../../../Model/UserModel.js';
import Controller from '../Controller.js';

/* init package */
config();


class LoginController extends Controller {
    static async postLogin(req, res) {
        // validate req
        const isValid = super.validator(req, res, {
            email: ['string'],
            password: ['string']
        });
        if (!isValid) return;

        // init var
        const { email, password } = req.body

        // check email
        const user = await UserModel.query().where({ email }).first();
        if (!user) return res.status(401).send({
            message: 'Email tidak terdaftar!'
        })

        // check password
        const checkPassword = await bcrypt.compare(password, user.password)
        if (!checkPassword) return res.status(401).send({
            message: 'Password salah!'
        })

        // generate token
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

export default LoginController