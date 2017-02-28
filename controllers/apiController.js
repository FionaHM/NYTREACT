var exprhbs = require('express-handlebars'); 
var Article = require('../models/article.js');
var APIKey = require('../config/APIKEY.js');
var request = require('request');
var React = require('react');
var ReactDOM = require('react-dom');
var methodOverride = require("method-override");

// I pass the app in as a parameter - this means i dont need to require express above
function router(app){
	// this tells express what template engine to use and the default template lives (main)
	app.engine('handlebars', exprhbs({defaultLayout: 'main'}));
	// this sets the view engine to handlebars
	app.set('view engine', 'handlebars');

	// does nyt search and displays results
	app.get('/search', function(req, res){
		// do some validation
		var beginDate = req.params.startdate;
		var endDate = req.params.enddate;
		var topic = req.params.topic;

		var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIKey + "&q=";
		request.get({
			url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
			qs: {
				'api-key': APIKey,
				'q': topic,
				'begin_date': beginDate,
				'end_date': endDate,
				'sort': "newest"
			},
		}, function(err, response, body) {
		body = JSON.parse(body);  // put string in json
		console.log(body.response);  // use json 

		// format the data

		// create a component
		var Main = react.createClass

		// now to render the results to the index.html somehow!
			// ReactDOM.render(
			// message, 
			// document.getElementById('app')
			// );

		})

	})

	// gets all saved articles
	app.get('/api/saved', function(req, res){
		// res.render('index', {})
	})
	
	// saves new articles
	app.post('/api/saved', function(req, res){
		// res.render('index', {})

	})

		
	// removes articles articles
	app.delete('/api/saved', function(req, res){
		// res.render('index', {})

	})

	// put this at the end after all other routes
	app.get('/', function(req, res){
		res.render('index', {})
	})
	

}

module.exports = router;