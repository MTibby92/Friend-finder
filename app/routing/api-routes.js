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

	api.get('/', function(req, res) {
		res.json(userArr)
	})

	api.post('/', function(req, res) {
		// res.json('test2')
		var newUser = req.body
		console.log('This is newUser', newUser)
		// var userArr = require('../data/friends.js')
		var compatArray = []
		for (user in userArr) {
			var otherScores = userArr[user].scores
			console.log('Line 54 otherScores', otherScores)
			var compatScore = 0
			for (score in otherScores) {
				compatScore += Math.abs(otherScores[score] - newUser.scores[score])
				console.log('compatScore at line 57', compatScore)
			}
			compatArray.push(compatScore)
		}

		console.log('Line 61, compatArray', compatArray)

		var diff = compatArray[0]
		var userIndex = 0
		for (val in compatArray) {
			if (compatArray[val] < diff) {
				diff = compatArray[val]
				userIndex = val
			}
		}

		console.log('Diff is', diff)
		console.log('userIndex is',  userIndex)

		userArr.push(newUser)
		res.json(userArr[userIndex])
	})

	return api;
}) ()