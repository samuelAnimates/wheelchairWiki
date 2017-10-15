// https://www.codementor.io/olatundegaruba/5-steps-to-authenticating-node-js-with-jwt-7ahb5dmyr
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require("../models");


module.exports = {
    //register a new user
    register : function(req, res){
        //create new user with input from site. requires username and password
        var newUser = new User(req.body);
        newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
        newUser.save(function(err, user) {
          if (err) {
            return res.status(400).send({
              message: err
            });
          } else {
            user.hash_password = undefined;
            return res.json(user);
          }
        });
    },

    signIn : function(req, res){
        //check that the user exists
        User.findOne({
            username: req.body.username
        }, function(err, user) {
            if (err) throw err;
            if (!user) {
                res.status(401).json({ message: 'Authentication failed. User not found.' });
            } else if (user) {
                if (!user.verifyPassword(req.body.password)) {
                    res.status(401).json({ message: 'Authentication failed. Wrong password.' });
                } else {
                    return res.json({token: jwt.sign({ email: user.email, fullName: user.fullName, _id: user._id}, 'secret')});
                }
            }
        });
    },

    loginRequired : function(req, res, next){
        if (req.user) {
            next();
        } else {
            return res.status(401).json({ message: 'Unauthorized user!' });
        }
    },

    test : function(req, res){
        res.json(req.body)
    }
}