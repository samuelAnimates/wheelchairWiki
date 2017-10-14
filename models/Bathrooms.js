const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bathroomSchema = new Schema({
    type: {
        type: String,
        trim: true,
        default: "bathroom"
    },
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
});

const Bathrooms = mongoose.model("Bathrooms", bathroomSchema);
module.exports = Bathrooms;