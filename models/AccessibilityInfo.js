const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AccesibilityInfoSchema = new Schema({
    city: {
        type: Schema.Types.ObjectId,
        ref: "City"
    },
    sites: {
        type: Schema.Types.ObjectId,
        ref: "Sites"
    },
    restaurants: {
        type: Schema.Types.ObjectId,
        ref: "Restaurants"
    },
    bathrooms: {
        type: Schema.Types.ObjectId,
        ref: "Bathrooms"
    }
});

const AccesibilityInfo = mongoose.model("AccesibilityInfo", AccesibilityInfoSchema);
module.exports = AccesibilityInfo;