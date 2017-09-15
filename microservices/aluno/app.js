const express = require('express'),
    app = express(),
    route = require('./route'),
    bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.disable('x-powered-by')
route.register(app)
app.listen(8084, () => {})

module.exports = app
