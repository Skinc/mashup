
/*
 * GET home page.
 */

exports.login = function(req, res){
  res.render('login', { title: 'Express', Page1: 'Welcome!', Page2: 'About', Page3:'Contact' });
};


exports.about = function(req, res){
  res.render('about', { title: 'Express', Page1: 'Welcome!', Page2: 'About', Page3:'Contact' });
};


exports.contact = function(req, res){
  res.render('contact', { title: 'exportsxpress', Page1: 'Welcome!', Page2: 'About', Page3:'Contact' });
};