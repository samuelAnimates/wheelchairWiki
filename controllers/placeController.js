var mongoose = require('mongoose');
const db = require("../models");

function titleize(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

module.exports = {
    findAll : function(req, res){
        //req doesn't need to contain anything
        db.Locations.find({})
        .then(locations => {
            db.Bathrooms.find({})
            .then(bathrooms => res.json(locations.concat(bathrooms)))
        }).catch(function(err){
            res.status(422).json(err)
        })
    },

    findAllOfType : function(req, res){
        res.json("test")
    },

    findById : function(req, res){
        res.json("test")
    },

    updatePlace : function(req, res){
        //req should contain: place id in params, stuff to change in an object
        res.json("test")
    },

    deletePlace : function(req, res){
        res.json("test")
    }
};