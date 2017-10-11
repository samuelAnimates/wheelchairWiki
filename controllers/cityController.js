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

    findById : function(req, res){
        //req should contain: id in params, and nothing else
        db.City.findOne({"_id": mongoose.Types.ObjectId(req.params.id)})
        .populate("sites restaurants bathrooms")
        .exec((error, result) => res.json(result))
    },

    addPlace: function(req, res){
        //req should contain: id of the city to add to, 
    },

    updateCity : function(req, res){
        res.json("test")
    },

    updatePlace : function(req, res){
        res.json("test")
    },

    test : function(req, res){
        res.json("test")
    }

}