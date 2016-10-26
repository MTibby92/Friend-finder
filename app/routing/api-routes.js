var express = require('express')
var path = require('path')

module.exports = (function() {
	var api = express.Router()

	api.get('/api/friends', function(req, res) {
		res.send('some json')
	})

	// api.use('/api', function(req, res) {
	// 	res.json('test2')
	// })

	return api;
}) ()