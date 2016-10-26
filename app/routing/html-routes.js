var express = require('express')
var path = require('path')

module.exports = (function() {
	var html = express.Router()

	html.get('/survey', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/survey.html'))
	})

	html.use('/', function(req, res) {
		res.sendFile(path.join(__dirname + '/../public/home.html'))
	})

	return html;
}) ()

