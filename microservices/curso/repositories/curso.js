const config = require('../../config'),
    Sequelize = require('sequelize'),
    sequelize = new Sequelize(config.db.database, config.db.user, config.db.password, {
        host: config.db.host,
        port: config.db.port,
        dialect: config.db.dialect,
    })

const Curso = sequelize.define('curso', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nomeCurso: {
        type: Sequelize.STRING,
    },
    periodo: {
        type: Sequelize.STRING,
    },
    valorMatricula: {
        type: Sequelize.DECIMAL,
    },
    valorMensalidade: {
        type: Sequelize.DECIMAL,
    },
    parcelas: {
        type: Sequelize.INTEGER,
    },
    nomeCoordenador: {
        type: Sequelize.STRING,
    },
}, {
    freezeTableName: true,
    timestamps: false,
})

module.exports.get = (req, res) => {
    Curso.findAll().then((curso) => {
        res.send(curso)
    })
        .catch((err) => {
            res.send(`Ocorreu um erro: ${err}`)
        })
}

module.exports.save = (req, res) => {
    Curso.create({
        nomeCurso: req.body.nomeCurso ? req.body.nomeCurso : '',
        periodo: req.body.periodo ? req.body.periodo : '',
        valorMatricula: req.body.valorMatricula ? req.body.valorMatricula : 0,
        valorMensalidade: req.body.valorMensalidade ? req.body.valorMensalidade : 0,
        parcelas: req.body.parcelas ? req.body.parcelas : 0,
        nomeCoordenador: req.body.nomeCoordenador ? req.body.nomeCoordenador : '',
    })
        .then((curso) => {
            res.send(`Sucesso! ID: ${curso.dataValues.id}`)
        })
        .catch((err) => {
            res.send(`Ocorreu um erro: ${err}`)
        })
}
