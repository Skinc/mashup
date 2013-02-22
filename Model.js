var mongoose = require('mongoose')

var userschema = mongoose.Schema({ 
    Name: String, 
    likes: [{like: String }], 
    projects: [{title: String, prompt: String, work: String, Points:Number}]});
var user = mongoose.model('User', userschema);

var youtubeschema = mongoose.Schema({
  Title: String,
  link: String,
  length: Number
});

youtube = mongoose.model('video', youtubeschema)
exports.user = user
exports.youtube = youtube
