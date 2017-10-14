var mongoose = require('mongoose');
const db = require("../models");

//https://stackoverflow.com/questions/196972/convert-string-to-title-case-with-javascript/196991
function titleize(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

module.exports = {
    createCity : function(req, res){
        //req should contain: an object containing the information for the city, under the "city" key
        //e.g.:    {
            //     "city": {
            //         "name": "Town",
            //         "country": "Country",
            //         "latitude": 21,
            //         "longitude": 22
            //     }
            // }
        db.City.create(req.body.city).then(cityModel => {
            res.json(cityModel)
        }).catch(function(err){
            res.status(422).json(err)
        })
    },

    findAll : function(req, res){
        //req does not need to contain anything
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

    findCityByName : function(req, res){
        //req should contain: city name in params (replace spaces with -), and nothing else
        let cityName = titleize(req.params.name.replace(/\-/g, " "))
        db.City.findOne({"name": cityName})
        .select('name country latitude longitude')
        .exec((error, result) => res.json(result))
    },

    updateCity : function(req, res){
        //req should contain: id in params, the information to be changed in the city.
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
        // req should contain: id in params, and nothing else
        db.City.findByIdAndRemove(req.params.id)
        .then(result => res.json(result))
    }
}