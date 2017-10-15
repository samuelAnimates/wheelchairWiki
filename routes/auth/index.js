const router = require("express").Router();
const usersController = require("../../controllers/usersController");
const passport = require("passport")

require('../../config/passport')(passport);

router.route("/signup")
 .post(passport.authenticate('local-signup'),
    function(req, res) {
        // If this function gets called, authentication was successful.
        // `req.user` contains the authenticated user.
        // It will return a 401 error if there was a problem signing up (or repear username)
        res.json(req.user.username);
    });

router.route("/login")
 .post(passport.authenticate('local-login'),
    function(req, res) {
        // If this function gets called, authentication was successful.
        // `req.user` contains the authenticated user.
        // It will return a 401 error if there was a problem signing up (or repear username)
        res.json(req.user.username);
    });

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
