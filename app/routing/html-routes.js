module.exports = function(app) {
	app.get('/survey', function(req, res) {
		// res.sendFile(path.resolve(__dirname + '/../public/survey.html'))
		res.sendFile(path.resolve(__dirname + '/../public/survey.html'))
	})

	// app.use('/', function(req, res) {
	// 	console.log(path.resolve(__dirname + '/../public/home.html'))
	// 	// res.sendFile(path.resolve(__dirname + '/../public/home.html'))
	// 	res.sendFile(path.resolve('./../public/home.html'))
	// })
}