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
    id: {type : String, required : true, unique : true},
    headline: {type : String, required : true, unique : true},
    pubdate: {type : String, required : true, unique : false}, 
    weburl: {type : String, required : true, unique : true},
    snippet: {type : String, required : false, unique : true},
    created_at: {type : Date, required : true, default: Date.now},
    updated_at: {type : Date, required : true, default: Date.now},
});

// create a model using this Schema
var Article = mongoose.model('Article', articleSchema);

// export the model
module.exports = Article;
