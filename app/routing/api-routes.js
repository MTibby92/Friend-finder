var express = require('express')
var path = require('path')
var userArr = 
[
	{
	  "name":"Ahmed",
	  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
	  "scores":[
	     5,
	     1,
	     4,
	     4,
	     5,
	     1,
	     2,
	     5,
	     4,
	     1
	   ]
	}, 
	{
	  "name":"Ahmed 2",
	  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
	  "scores":[
	     3,
	     1,
	     5,
	     4,
	     3,
	     1,
	     5,
	     5,
	     1,
	     1
	   ]
	}
]

module.exports = (function() {
	var api = express.Router()

	api.get('/api/friends', function(req, res) {
		res.send('some json')
	})

	api.post('/api/friends', function(req, res) {
		// res.json('test2')
		var newUser = req.body
		// var userArr = require('../data/friends.js')
		var compatArray = []
		for (user in userArr) {
			var otherScores = user.scores
			var compatScore = 0
			for (score in otherScores) {
				compatScore += Math.abs(otherScores[score] - newUser.scores[score])
			}
			compatArray.push(compatScore)
		}

		var diff = compatArray[0]
		var userIndex = 0
		for (val in compatArray) {
			if (compatArray[val] < diff) {
				diff = compatArray[val]
				userIndex = val
			}
		}

		userArr.push(newUser)
	})

	return api;
}) ()