// Core modules
var path = require('path')

// 3rd Party Modules
var express = require('express')


// Main Variables
var app = express()
// App will listen on this port
var LISTEN_PORT = '8080'

// Serve the static files
app.use(express.static('src'))

// redirect if nothing else sent a response
app.use(function redirectUnmatched(req, res) {
  res.redirect("http://www.bjones.me/")
})

// Serve the app on the LISTEN_PORT
app.listen(LISTEN_PORT)
console.log('App listening on port: ' + LISTEN_PORT)
