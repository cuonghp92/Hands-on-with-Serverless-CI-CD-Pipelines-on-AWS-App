'use strict'
const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('<html>Hello Cuong v2</html>'))
module.exports = app
