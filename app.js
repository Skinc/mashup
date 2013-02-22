
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , user = require('./routes/user')
  , http = require('http')
  , path = require('path')
  , mongoose = require('mongoose')
  , mainpage = require("./routes/mainpage")
  , Facebook = require('facebook-node-sdk');

var app = express();
app.configure(function(){
  mongoose.connect(process.env.MONGOLAB_URI || 'localhost/mashup');
  app.set('port', process.env.PORT || 5000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.favicon());
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.cookieParser('your secret here'));
  app.use(express.session());
  //app.use(Facebook.middleware({ appId: '552433498108752', secret: 'c166904fd442482a15b8747ee8d12d2b'}));
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});


app.configure('development', function(){
  app.use(express.errorHandler());
});

app.get('/', mainpage.mainpage);
app.get('/users', user.list);
app.get('/login', routes.login);
app.get('/about', routes.about);
app.get('/contact', routes.contact);
app.post('/signin', mainpage.signin)
app.post('/addlike', mainpage.addlike)
app.get('/info', mainpage.infor)
app.get('/project', mainpage.project)
app.get('/vid', mainpage.vid)
app.get('/Projects', mainpage.project)
http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});
