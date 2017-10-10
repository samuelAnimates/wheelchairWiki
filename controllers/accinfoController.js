var mongoose = require('mongoose');
const db = require("../models");


module.exports = {
    createInfo : function(req, res){
        let infoList = [];
        infoList.push(db.City.create(req.body.city))
        infoList.push(db.Locations.create(req.body.sites))
        infoList.push(db.Locations.create(req.body.restaurants))
        infoList.push(db.Bathrooms.create(req.body.bathrooms))

        Promise.all(infoList).then(function(values) {
            db.AccessibilityInfo.create({
                city: values[0]._id,
                sites: values[1]._id,
                restaurants: values[2]._id,
                bathrooms: values[3]._id
            }).then(infoModel => {
                // res.json(infoModel)
                db.City
                .findOneAndUpdate({ _id: values[0]._id }, {info: infoModel._id}, {new: true})
                .then(dbModel => res.json(dbModel))
            })
        }).catch(function(err){
            res.status(422).json(err)
        })
    },


    test : function(req, res){
        res.json("test")
    }

}