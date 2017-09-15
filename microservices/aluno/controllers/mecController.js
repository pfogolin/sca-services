module.exports.get = (req, res) => {    
    var arrBolsaEstudos = [0, 25, 50, 75, 100]
    var bolsaEstudos = arrBolsaEstudos[Math.floor(Math.random() * arrBolsaEstudos.length)]
    var ret = {
        "bolsaEnem" : bolsaEstudos
    }
    console.log(bolsaEstudos)
    res.send(JSON.stringify(ret))
}