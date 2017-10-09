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
    info: {
        type: Schema.Types.ObjectId,
        ref: "AccessibilityInfo"
    }
});

const City = mongoose.model("City", citySchema);
module.exports = City;