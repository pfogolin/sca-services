const repository = require('../repositories/aluno')

module.exports.get = (req, res) => {
    repository.get(req, res)
}

module.exports.post = (req, res) => {
    repository.save(req, res)
}
