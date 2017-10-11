const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const citySchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "City name is Required"
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

const City = mongoose.model("City", citySchema);
module.exports = City;