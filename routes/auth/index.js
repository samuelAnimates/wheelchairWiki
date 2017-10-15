const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("passport")

require('../../config/passport')(passport);

router.route("/register")
 .post(usersController.register);

// app.post('/login', do all our passport stuff here);

// router.route("/signin")
//  .post(usersController.signIn);

router.route("/signup")
//  .post(function(req, res){
//      res.json("test")
//  })
 .post(passport.authenticate('local-signup', {
    successRedirect : '/api/city', // redirect to the secure profile section
    failureRedirect : '/api/places', // redirect back to the signup page if there is an error
    failureFlash : true // allow flash messages
  }));

router.route("/test")
 .post(usersController.loginRequired, usersController.test);

function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}

module.exports = router;
