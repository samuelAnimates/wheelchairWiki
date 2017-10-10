const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccesibilityInfoSchema = new Schema({
    city: {
        type: Schema.Types.ObjectId,
        ref: "City",
        index: true
    },
    sites: {
        type: Schema.Types.ObjectId,
        ref: "Locations"
    },
    restaurants: {
        type: Schema.Types.ObjectId,
        ref: "Locations"
    },
    bathrooms: {
        type: Schema.Types.ObjectId,
        ref: "Bathrooms"
    }
});

const AccesibilityInfo = mongoose.model("AccesibilityInfo", AccesibilityInfoSchema);
module.exports = AccesibilityInfo;