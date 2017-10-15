const router = require("express").Router();
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
        res.json(req.user.username);
    });
    

router.route("/test")
 .post(isLoggedIn, function(req, res){
    res.json(req.body)
});

function isLoggedIn(req, res, next) {
    if (req.isAuthenticated())
        return next();

    res.status(401).json("Unauthorized User")
}

module.exports = router;
