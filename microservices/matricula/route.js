module.exports.register = (app) => {
    const controller = require('./controllers/matriculaController')

    app.get('/matricula', controller.get)
    app.post('/matricula/gravar', controller.post)
}
