var mongoose = require('mongoose');
const db = require("../models");


module.exports = {
    //req should contain: an object containing the information for the city, under the "city" key
    //e.g.:    {
            //     "city": {
            //         "name": "Town",
            //         "country": "Country",
            //         "latitude": 21,
            //         "longitude": 22
            //     }
            // }
    createCity : function(req, res){
        db.City.create(req.body.city).then(cityModel => {
            res.json(cityModel)
        }).catch(function(err){
            res.status(422).json(err)
        })
    },

    findAll : function(req, res){
        db.City.find({})
        .select('name country latitude longitude')
        .exec((error, result) => res.json(result))
    },

    findCityById : function(req, res){
        //req should contain: id in params, and nothing else
        db.City.findById(req.params.id)
        .populate("sites restaurants bathrooms")
        .exec((error, result) => res.json(result))
    },

    updateCity : function(req, res){
        //req should contain: the information to be set in the city.
        //e.g.
        // {
        //     "name": "Ho Chi Minh",
        //     "country": "Vietnam"
        // }
        db.City.findByIdAndUpdate(req.params.id, req.body, {new: true})
        .select('name country latitude longitude')
        .exec((error, result) => res.json(result))
    },

    deleteCity : function(req, res){
        //TODO: write this function
        db.City.findByIdAndRemove(req.params.id, req.body, {new: true})
        .select('name country latitude longitude')
        .exec((error, result) => res.json(result))
    }
}