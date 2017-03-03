var exprhbs = require('express-handlebars'); 
var Article = require('../models/article.js');
var APIKey = require('../config/APIKEY.js');
var request = require('request'); 
var path = require('path');
var methodOverride = require('method-override');
var React = require('react');

// I pass the app in as a parameter - this means i dont need to require express above
function router(app){
	// this tells express what template engine to use and the default template lives (main)
	app.engine('handlebars', exprhbs({defaultLayout: 'main'}));
	// this sets the view engine to handlebars
	app.set('view engine', 'handlebars');

	// does nyt search and displays results
	app.get('/search/:topic/:startdate/:enddate', function(req, res){
		// do some validation
		var beginDate = req.params.startdate;
		var endDate = req.params.enddate;
		var topic = req.params.topic;
		// using dummy data for nows
		console.log(req.params );
		var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIKey + "&q=";
		request.get({
			url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
			qs: {
				'api-key': APIKey,
				'q': topic,
				'begin_date':beginDate,
				'end_date': endDate,
				'sort': "newest"
			},
		}, function(err, response, body) {
			// only send top 10 results -- need to do something here
			body = JSON.parse(body);  // put string in json
			res.json(body.response);
		})

	})

	// gets all saved articles
	app.get('/api/saved', function(req, res){
		// res.render('index', {})
		Article.find({}).exec(function(err, articles) {
			
			if (err) {
				console.log(err);
				res.end();
			} else {
				console.log("saved articles", articles);
				res.json(articles);
			}	
		});
	})
	
	// saves new articles
	app.post('/api/saved', function(req, res){
		// console.log("req.body", req.body);
		var newArticle = new Article(req.body);
		//save  to db
		newArticle.save({}, function(err, article) {
			if (err) {
				console.log(err);
				res.end();
			} else {
				// console.log(article);
				res.json(article);
			}
		})

	})

	// removes saved articles from dbs
	app.delete('/api/saved/:id', function(req, res){
		Article.remove({id: req.params.id},function(err, article) {
			if (err) {
				console.log(err);
			} 
			res.end();
		})

	})

	// put this at the end after all other routes
	app.get('/', function(req, res){
		 res.render('index');
	})
	

}

module.exports = router;