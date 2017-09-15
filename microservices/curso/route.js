module.exports.register = (app) => {
    const controller = require('./controllers/cursoController')

    app.get('/curso', controller.get)
    app.post('/curso/gravar', controller.post)
}
