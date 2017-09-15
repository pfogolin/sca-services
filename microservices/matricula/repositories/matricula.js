const config = require('../config'),
    Sequelize = require('sequelize'),
    sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
        host: config.db.host,
        port: config.db.port,
        dialect: config.db.dialect,
    })

const Matricula = sequelize.define('matricula', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    alunoId: {
        type: Sequelize.INTEGER,
    },
    cursoId: {
        type: Sequelize.INTEGER,
    },
    dataInicio: {
        type: Sequelize.DATE,
    },
    dataFim: {
        type: Sequelize.DATE,
    },
    bolsaEstudos: {
        type: Sequelize.DECIMAL,
    },
}, {
    freezeTableName: true,
    timestamps: false,
})

module.exports.get = (req, res) => {        
    Matricula.findAll().then((matricula) => {        
        res.send(matricula)
    })
        .catch((err) => {
            res.send(`Ocorreu um erro: ${err}`)
        })
}

module.exports.save = (req, res) => {
    Matricula.create({
        alunoId: req.body.alunoId,
        cursoId: req.body.cursoId,
        dataInicio: req.body.dataInicio,
        dataFim: req.body.dataFim,
        bolsaEstudos: req.body.bolsaEstudos ? req.body.bolsaEstudos : 0,
    })
        .then((matricula) => {
            res.send(`Sucesso! ID: ${matricula.dataValues.id}`)
        })
        .catch((err) => {
            res.send(`Ocorreu um erro: ${err}`)
        })
}
