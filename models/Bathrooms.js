const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bathroomSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Bathroom name is Required"
    },
    notes: {
        type: String,
        trim: true,
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    }
});

const Bathroom = mongoose.model("Bathroom", bathroomSchema);
module.exports = Bathroom;