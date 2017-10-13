var mongoose = require('mongoose');
const db = require("../models");


module.exports = {
    //TODO: convert this to a place type thing; needs to take in city id
    addPlace: function(req, res){
        //req should contain: id of the city to add to, object containing all info needed to construct a place, and the type of place (sites, restaurants, bathrooms)
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

    findAll : function(req, res){
        res.json("test")
    },

    findAllOfType : function(req, res){
        res.json("test")
    },

    findById : function(req, res){
        res.json("test")
    },

    updatePlace : function(req, res){
        res.json("test")
    },

    deletePlace : function(req, res){
        res.json("test")
    }
}