// Dependencies
// =============================================================
var express = require('express')
var bodyParser = require('body-parser')
var path = require('path')
// var router = express.Router()
var apiRoutes = require('./app/routing/api-routes')
var htmlRoutes = require('./app/routing/html-routes')


// Sets up the Express App
// =============================================================
var app = express();
const PORT = process.env.PORT || 3000

// Sets up the Express app to handle data parsing
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.text())
app.use(bodyParser.json({ type: 'application/vnd.api+json' }))

app.use('/api/friends', apiRoutes);
app.use('/', htmlRoutes);

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT)
})