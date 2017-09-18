module.exports.register = (app) => {
    const alunoController = require('./aluno/controllers/alunoController')
    const mecController = require('./aluno/controllers/mecController')

    app.get('/aluno', alunoController.get)
    app.post('/aluno/gravar', alunoController.post)
    app.get('/bolsaEnem', mecController.get)

    const cursoController = require('./curso/controllers/cursoController')
    
    app.get('/curso', cursoController.get)
    app.post('/curso/gravar', cursoController.post)

    const matriculaController = require('./matricula/controllers/matriculaController')
    
    app.get('/matricula', matriculaController.get)
    app.post('/matricula/gravar', matriculaController.post)
}
