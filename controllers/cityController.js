var mongoose = require('mongoose');
const City = require("../models/City.js");
const accinfoController = require("./accinfoController.js");

module.exports = {
    test : function(req, res){
        res.json("test")
    }

}