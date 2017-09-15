const config = require('../config'),
    Sequelize = require('sequelize'),
    sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
        host: config.db.host,
        port: config.db.port,
        dialect: config.db.dialect,
    })

const Aluno = sequelize.define('aluno', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nomeCompleto: {
        type: Sequelize.STRING,
    },
    dataNascimento: {
        type: Sequelize.DATE,
    },
    RG: {
        type: Sequelize.STRING,
    },
    CPF: {
        type: Sequelize.STRING,
    },
    Email: {
        type: Sequelize.STRING,
    },
    CEP: {
        type: Sequelize.STRING,
    },
    Endereco: {
        type: Sequelize.STRING,
    },
    Telefone: {
        type: Sequelize.STRING,
    },
    DocIdentidade: {
        type: Sequelize.STRING,
    },
    CompResidencia: {
        type: Sequelize.STRING,
    },
}, {
    freezeTableName: true,
    timestamps: false,
})

module.exports.get = (req, res) => {
    Aluno.findAll().then((aluno) => {
        res.send(aluno)
    })
        .catch((err) => {
            res.send(`Ocorreu um erro: ${err}`)
        })
}

module.exports.save = (req, res) => {
    Aluno.create({
        nomeCompleto: req.body.nomeCompleto ? req.body.nomeCompleto : '',
        dataNascimento: req.body.dataNascimento,
        RG: req.body.RG ? req.body.RG : '',
        CPF: req.body.CPF ? req.body.CPF : '',
        Email: req.body.Email ? req.body.Email : '',
        CEP: req.body.CEP ? req.body.CEP : '',
        Endereco: req.body.Endereco ? req.body.Endereco : '',
        Telefone: req.body.Telefone ? req.body.Telefone : '',
        DocIdentidade: req.body.DocIdentidade ? req.body.DocIdentidade : '',
        CompResidencia: req.body.CompResidencia ? req.body.DocIdentidade : '',
    })
        .then((aluno) => {
            res.send(`Sucesso! ID: ${aluno.dataValues.id}`)
        })
        .catch((err) => {
            res.send(`Ocorreu um erro: ${err}`)
        })
}
