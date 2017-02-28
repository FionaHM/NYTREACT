// var mongoose = require('mongoose');
// // connect to the database
// mongoose.connect('mongodb://localhost:27017/newsscraperdb');
var mongoose = require('../config/connection.js');
// CHANGE from 1.x: need to pass in mongoose instance
// var deepPopulate = require('mongoose-deep-populate')(mongoose);

var Schema = mongoose.Schema;
// create a Schema
var articleSchema = new Schema({
    // _id: Number,
    title: {type : String, required : true, unique : true},
    date: {type : String, required : true, unique : true}, // might change to date later
    url: {type : String, required : true, unique : true},
    created_at: Date,
    updated_at: Date
});

// create a model using this Schema
var Article = mongoose.model('Article', articleSchema);

// export the model
module.exports = Article;