const LoginController = require("./Http/Controller/Auth/LoginController");
const RegisterController = require("./Http/Controller/Auth/RegisterController");
const SampleController = require("./Http/Controller/SampleController");
const { auth } = require("./Http/Middleware/AuthMiddleware");



module.exports = async (app, options, done) => {

    app.get('/', SampleController.index)
    app.post('/login', LoginController.postLogin)
    app.post('/register', RegisterController.reigister)
    app.get('/withAuth', { preHandler: [auth] }, SampleController.index)

    done();
}