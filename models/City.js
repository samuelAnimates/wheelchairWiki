const mongoose = require("mongoose");
const Locations = require('./Locations.js');
const Bathrooms = require('./Bathrooms.js');
const Schema = mongoose.Schema;

const citySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "City name is Required",
        unique: "That city is already in the database"
    },
    country: {
        type: String,
        trim: true,
        required: "Country name is Required"
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    },
    transportation: {
        type: String,
        trim: true
    },
    terrain: {
        type: String,
        trim: true
    },
    links: [
        {
            url: {
                type: String,
                trim: true
            },
            title: {
                type: String,
                trim: true
            }
        }
    ],
    sites: [{
        type: Schema.Types.ObjectId,
        ref: "Locations"
    }],
    restaurants: [{
        type: Schema.Types.ObjectId,
        ref: "Locations"
    }],
    bathrooms: [{
        type: Schema.Types.ObjectId,
        ref: "Bathrooms"
    }]
});

//set up middleware to recursively delete all places associated with this city when the city is deleted
citySchema.pre('remove', function(next) {
    let promiseList = [];
    let locations = this.restaurants.concat(this.sites);
    let bathrooms = this.bathrooms;
    promiseList.push(Locations.deleteMany({ _id: { $in: locations}}));
    promiseList.push(Bathrooms.deleteMany({ _id: { $in: bathrooms}}));
    Promise.all(promiseList).then(function(){
        next()
    })
});

const City = mongoose.model("City", citySchema);
module.exports = City;