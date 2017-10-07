const mongoose = require("mongoose");
const Schema = mongoose.Schema;

function categoryValidation (val) {
    if([0, .5, 1].indexOf(val)<0){
        return false;
    }
    return true;
}

const siteSchema = new Schema({
    name: {
        type: String,
        trim: true,
        required: "Site name is Required"
    },
    description: {
        type: String,
        trim: true
    },
    notes: {
        type: String,
        trim: true
    },
    entrance: {
        type: Number,
        validate: [
            categoryValidation,
            "Entrance value must be 0 (no), .5 (partial), or 1 (yes)"
        ]
    },
    entranceNotes: {
        type: String,
        trim: true
    },
    bathroom: {
        type: Number,
        validate: [
            categoryValidation,
            "Bathroom value must be 0 (no), .5 (partial), or 1 (yes)"
        ]
    },
    bathroomNotes: {
        type: String,
        trim: true
    },
    linkTitle: {
        type: String,
        trim: true
    },
    linkVideo: {
        type: String,
        trim: true
    },
    latitude: {
        type: Number
    },
    longitude: {
        type: Number
    }
});

const Site = mongoose.model("Site", siteSchema);
module.exports = Site;