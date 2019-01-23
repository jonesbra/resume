// Core modules
var path = require('path')

// 3rd Party Modules
var express = require('express')


// Main Variables
var app = express()
// App will listen on this port
var LISTEN_PORT = '80'

// Serve the static files
app.use(express.static('src'))

// Serve the app on the LISTEN_PORT
app.listen(LISTEN_PORT)
console.log('App listening on port: ' + LISTEN_PORT)
