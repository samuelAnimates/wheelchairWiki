var mongoose = require('mongoose');
const db = require("../models");

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
        //req should contain the type in params
        if(req.params.type=="bathroom"){
            db.Bathrooms.find({})
            .then(result => res.json(result))
            .catch(function(err){ res.status(422).json(err) })
        }
        else{
            db.Locations.find({"type":req.params.type})
            .then(result => res.json(result))
            .catch(function(err){ res.status(422).json(err) })
        }
    },

    findPlaceById : function(req, res){
        //req should contain: id in params, and nothing else
        if(req.params.type=="bathroom"){
            db.Bathrooms.findById(req.params.id)
            .then(result => res.json(result))
            .catch(function(err){ res.status(422).json(err) })
        }
        else{
            db.Locations.findById(req.params.id)
            .then(result => res.json(result))
            .catch(function(err){ res.status(422).json(err) })
        }
    },

    updatePlace : function(req, res){
        //req should contain: place id in params, stuff to change in an object
        if(req.params.type=="bathroom"){
            db.Bathrooms.findByIdAndUpdate(req.params.id, req.body, {new: true})
            .then(result => res.json(result))
            .catch(function(err){ res.status(422).json(err) })
        }
        else{
            db.Locations.findByIdAndUpdate(req.params.id, req.body, {new: true})
            .then(result => res.json(result))
            .catch(function(err){ res.status(422).json(err) })
        }
    },

    addPlaceLink : function(req, res){
        //req should contain: the type and place id in params, an object with the link information in the body
        //e.g. url: http://localhost:3001/api/places/bathroom/59e19DOCUMENTID04e573f/link
        //body: {
        // 	"url": "www.url.not",
        // 	"title": "URL title"
        // }
        if(req.params.type==="bathroom"){
            db.Bathrooms.findByIdAndUpdate(req.params.id, {$push: {"links": req.body}}, {new: true})
            .then(result => res.json(result))
            .catch(function(err){ res.status(422).json(err) })
        } else{
            db.Locations.findByIdAndUpdate(req.params.id, {$push: {"links": req.body}}, {new: true})
            .then(result => res.json(result))
            .catch(function(err){ res.status(422).json(err) })
        }
        
    },

    deletePlace : function(req, res){
        if(req.params.type=="bathroom"){
            db.Bathrooms.findByIdAndRemove(req.params.id)
            .then(result => res.json(result))
            .catch(function(err){ res.status(422).json(err) })
        }
        else{
            db.Locations.findByIdAndRemove(req.params.id)
            .then(result => res.json(result))
            .catch(function(err){ res.status(422).json(err) })
        }
    }
};