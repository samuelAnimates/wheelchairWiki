var mongoose = require('mongoose');
const db = require("../models");

function titleize(str)
{
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
}

module.exports = {
    addPlace: function(req, res){
        //req should contain: id of the city to add to (under param "cityid"), object (under prop "place") containing all info needed to construct a place, including the type of place (site, restaurant, bathroom)
        //e.g.
        // url: http://localhost:3001/api/places/site/city/59e18dbae9eb0a1b2cf58412
        //{
        // 	"type": "site",
        // 	"name": "Test Site"
        // }
        let placeType = req.params.type;
        if(placeType === "bathroom"){
            var model = db.Bathrooms;
        }
        else{
            var model = db.Locations;
        }
        //create the instance
        model.create(req.body)
        .then(infoModel => {
            //add it to the city
            if(placeType==="bathroom"){
                db.City.findOneAndUpdate({"_id": mongoose.Types.ObjectId(req.params.cityid)}, {$push: {"bathrooms": infoModel._id}}, {new: true})
                .populate("sites restaurants bathrooms")
                .exec((error, result) => res.json(result))
            }
            else if(placeType==="restaurant"){
                db.City.findOneAndUpdate({"_id": mongoose.Types.ObjectId(req.params.cityid)}, {$push: {"restaurants": infoModel._id}}, {new: true})
                .populate("sites restaurants bathrooms")
                .exec((error, result) => res.json(result))
            }
            else {
                db.City.findOneAndUpdate({"_id": mongoose.Types.ObjectId(req.params.cityid)}, {$push: {"sites": infoModel._id}}, {new: true})
                .populate("sites restaurants bathrooms")
                .exec((error, result) => res.json(result))
            }
            
        })
        .catch(function(err){
            res.status(422).json(err)
        })
    },

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