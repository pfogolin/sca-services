module.exports.register = (app) => {
    const alunoController = require('./controllers/alunoController')
    const mecController = require('./controllers/mecController')

    app.get('/aluno', alunoController.get)
    app.post('/aluno/gravar', alunoController.post)
    app.get('/bolsaEnem', mecController.get)
}
