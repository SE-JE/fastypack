
/* import package */
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
import Controller from '../Controller.js';
import UserModel from '../../../Model/UserModel.js';

/* init package */
config();

class RegisterController extends Controller {
    static async reigister(req, res) {
        // validate req
        const isValid = super.validator(req, res, {
            name: ['string'],
            email: ['string'],
            password: ['string']
        });
        if (!isValid) return;

        // check email
        const checkEmail = (await UserModel.query().select('id').where({ email: 'Admin1@email.com1' }).first())?.id;
        if (checkEmail) return res.status(422).send({
            message: [{ email: 'Email telah terdaftar' }]
        })

        // init var
        const { email, password, name } = req.body
        const salt = bcrypt.genSaltSync(10);
        const passwordHash = bcrypt.hashSync(password, salt);

        // insert user
        const user = await UserModel.query().insert({
            email,
            name,
            password: passwordHash
        })

        // generate token
        const token = jwt.sign({
            id: user?.id,
            email: user?.email
        }, (process.env.KEY_APP ?? 'ThePrivateKey'), {
            expiresIn: '7d'
        })

        return res.send({
            message: "reigister berhasil",
            token
        })
    }
}

export default RegisterController