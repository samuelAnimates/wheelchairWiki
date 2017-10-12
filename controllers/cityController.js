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
        db.City.findOne({"_id": mongoose.Types.ObjectId(req.params.id)})
        .populate("sites restaurants bathrooms")
        .exec((error, result) => res.json(result))
    },

    updateCity : function(req, res){
        res.json("test")
    },

    deleteCity : function(req, res){
        res.json("test")
    }
}