/**
 * Main application file
 */

'use strict'

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development'

var express = require('express')
var mongoose = require('mongoose')
var config = require('../config').backend

// Connect to database
mongoose.connect(config.mongo.uri, config.mongo.options)

// insure DB with admin user data
require('./config/seed')

// Setup server
var app = express()
// Suppport CORS
app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With');
  res.header('Access-Control-Allow-Methods','PUT,POST,GET,DELETE,OPTIONS');
  res.header('X-Powered-By',' 3.2.1');
  res.header('Content-Type', 'application/json;charset=utf-8');
  if (req.method == 'OPTIONS') res.send(200); /* 让options请求快速返回 */
  else next();
});
var server = require('http').createServer(app)
var socketio = require('socket.io')(server)
require('./config/socketio')(socketio)
require('./config/express')(app)
require('./routes')(app)

// Start server
server.listen(config.port, config.ip, function () {
  console.log('Express server listening on %d, in %s mode', config.port, app.get('env'))
})

// Expose app
exports = module.exports = app
