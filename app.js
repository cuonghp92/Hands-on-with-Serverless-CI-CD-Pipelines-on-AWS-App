'use strict'
const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('<html>Hello Cuong</html>'))
module.exports = app
