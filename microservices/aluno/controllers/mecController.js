module.exports.get = (req, res) => {    
    var arrBolsaEstudos = [0, 25, 50, 75, 100]
    var bolsaEstudos = arrBolsaEstudos[Math.floor(Math.random() * arrBolsaEstudos.length)]
    res.send(JSON.stringify(bolsaEstudos))
}