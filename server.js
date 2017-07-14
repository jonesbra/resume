// Core modules
var path = require('path')

// 3rd Party Modules
var express = require('express')

// Main Variables
var frontApp = express()

// frontApp will listen on this port
var FRONTEND_PORT = '8080'

// Serve the static files
frontApp.use(express.static('src'))

// redirect if nothing else sent a response
frontApp.use(function redirectUnmatched(req, res) {
  res.redirect("http://www.bjones.me/")
})

// Serve the frontApp on the LISTEN_PORT
frontApp.listen(FRONTEND_PORT)
console.log('Front End listening on port: ' + FRONTEND_PORT)


var backApp = express()
var BACKEND_PORT = '3001'

backApp.get('/api/lastCommit', function(req, res) {
  console.log('getting last commit')
  res.status(200)

  var git = require('git-last-commit')
  git.getLastCommit(function(err, commit) {
    // read commit object properties
    res.write(new Date(commit.committedOn * 1000).toISOString().slice(0, 10))
    res.end()
  })
  res.end('something')
})

// Serve the backApp on the LISTEN_PORT
backApp.listen(BACKEND_PORT)
console.log('Back End listening on port: ' + BACKEND_PORT)
