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

    addPlace: function(req, res){
        //req should contain: id of the city to add to (under param "cityid"), object (under prop "place") containing all info needed to construct a place, including the type of place (site, restaurant, bathroom)
        //e.g.
        // url: http://localhost:3001/api/city/id/59e18dbae9eb0a1b2cf58412/site
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

    deleteCity : function(req, res){
        // req should contain: id in params, and nothing else
        db.City.findByIdAndRemove(req.params.id)
        .then(result => res.json(result))
    }
}