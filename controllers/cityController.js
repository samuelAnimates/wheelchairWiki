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
        //req should contain: id of the city to add to in params, object containing all info needed to construct a place, and the type of place (sites, restaurants, bathrooms)
        let placeType = req.body.category
        if(placeType === "bathroom"){
            var model = db.Bathrooms;
        }
        else{
            var model = db.Locations;
        }
        //create the instance
        model.create(req.body.info)
        .then(infoModel => {
            //add it to the city
            if(placeType==="bathroom"){
                db.City.findOneAndUpdate({"_id": mongoose.Types.ObjectId(req.params.id)}, {$push: {"bathrooms": infoModel._id}}, {new: true})
                .populate("sites restaurants bathrooms")
                .exec((error, result) => res.json(result))
            }
            else if(placeType==="restaurant"){
                db.City.findOneAndUpdate({"_id": mongoose.Types.ObjectId(req.params.id)}, {$push: {"restaurants": infoModel._id}}, {new: true})
                .populate("sites restaurants bathrooms")
                .exec((error, result) => res.json(result))
            }
            else {
                db.City.findOneAndUpdate({"_id": mongoose.Types.ObjectId(req.params.id)}, {$push: {"sites": infoModel._id}}, {new: true})
                .populate("sites restaurants bathrooms")
                .exec((error, result) => res.json(result))
            }
            
        })
        .catch(function(err){
            res.status(422).json(err)
        })
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