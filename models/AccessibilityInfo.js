const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccesibilityInfoSchema = new Schema({
    city: {
        // Store ObjectIds in the array
        type: Schema.Types.ObjectId,
        // The ObjectIds will refer to the ids in the Note model
        ref: "City"
    },
    sites: {
        // Store ObjectIds in the array
        type: Schema.Types.ObjectId,
        // The ObjectIds will refer to the ids in the Note model
        ref: "Sites"
    },
    restaurants: {
        // Store ObjectIds in the array
        type: Schema.Types.ObjectId,
        // The ObjectIds will refer to the ids in the Note model
        ref: "Restaurants"
    },
    bathrooms: {
        // Store ObjectIds in the array
        type: Schema.Types.ObjectId,
        // The ObjectIds will refer to the ids in the Note model
        ref: "Bathrooms"
    }
});

const AccesibilityInfo = mongoose.model("AccesibilityInfo", AccesibilityInfoSchema);
module.exports = AccesibilityInfo;