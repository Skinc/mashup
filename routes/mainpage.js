var model = require('../Model.js') 
var user = model.user;
var youtube = model.youtube;


exports.signin = function(req, res){
    req.session.user = req.body.inputUsername
     console.log(req.body.inputUsername)
    console.log(req.session.user)
    user.find({Name:req.body.inputUsername}).exec(function(err, users) {
        console.log(users.length)
        if (users.length == 0){
            var newuser = new user({Name:req.body.inputUsername, likes: [{like:"Cat"}] , projects: [{title: "That big paper", prompt: "Make a thesis and stuff", work: "a man can only justify his actions if he regards his demeanor with deductive thinking.", Points:100}]})
            newuser.save(function (err) {
                if (err) 
                    console.log("error", err);
                });
            console.log("Added")
            res.redirect("/info") 

             // res.render('infopartial', {name: req.body.user, likes:[], title: 'Express', Page1: 'Welcome ' + req.body.user +"!" , Page2: 'Projects', Page3:'Your info' })
        }
        else{
            if (users[0].projects.length == 0){
                res.redirect("/info")
                // res.render('infopartial', {name: req.body.user, likes:users[0].likes, title: 'Express', Page1: 'Welcome ' + req.body.user +"!" , Page2: 'Projects', Page3:'Your info' })       
            } 
            else{
                res.redirect("/info")
                // res.render('project', {name: req.body.user, ptitle: String, prompt: String, work: String, Points:Number, title: 'Express', Page1: 'Welcome ' + req.body.user +"!" , Page2: 'Projects', Page3:'Your info' })           
            }

        }
    })
}

exports.mainpage = function(req, res){
    if (req.session.user==undefined){
        res.render('login', { title: 'Express', Page1: 'Welcome!', Page2: 'About', Page3:'Contact' });   
    }
    else
    {
        res.render('login', { title: 'Express', Page1: 'Welcome!', Page2: 'About', Page3:'Contact' });   
    }
}

exports.addlike = function(req, res){
    console.log(req.body.newlike)
    user.find({Name:req.body.user}).exec(function(err, users) {
        // console.log(users[0].likes)
        // var mlist =users[0].likes
        // mlist.push(req.body.newlike)
        // users[0].likes = mlist
        console.log("Got here")
        res.redirect("/info")
    })
    
}

exports.infor = function(req, res){
    console.log(req.session)
    user.find({Name:req.session.user}).exec(function(err, users) {
        console.log(users)
        res.render('info', {name: req.session.user, likes:[], title: 'Express', Page1: 'Welcome ' + req.session.user +"!" , Page2: 'Projects', Page3:'Your info' }) 
    })
    
}



exports.project = function(req, res){
    
    user.find({Name:req.session.user}).exec(function(err, users) {
        console.log(users[0].projects[0].prompt)

        res.render('project', {name: req.session.user, ptitle: users[0].projects[0].title,prompt: users[0].projects[0].prompt, work: users[0].projects[0].work, likes:users[0].likes, title: 'Express', Page1: 'Welcome ' + req.session.user +"!" , Page2: 'Projects', Page3:'Your info' }) 
    })
    
}

exports.vid = function(req, res){
    console.log("here vid")
    res.send('<iframe width="560" height="315" src="http://www.youtube.com/embed/VF9-sEbqDvU" frameborder="0" allowfullscreen></iframe>')
}