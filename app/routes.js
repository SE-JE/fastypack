import LoginController from "./Http/Controller/Auth/LoginController.js";
import RegisterController from "./Http/Controller/Auth/RegisterController.js";
import SampleController from "./Http/Controller/SampleController.js";
import { auth } from "./Http/Middleware/AuthMiddleware.js";



export default async (app, options, done) => {
    app.get('/', (_req, _res) => {
        return _res.send(koala)
    })

    app.get('/p', SampleController.index)
    app.post('/login', LoginController.postLogin)
    app.post('/register', RegisterController.reigister)
    app.get('/withAuth', { preHandler: [auth] }, SampleController.index)
    done();
}
