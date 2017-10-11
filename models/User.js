const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema({
    username: {
        type: String,
        trim: true,
        required: "Username is Required"
    },
    hash_password: {
        type: String,
        required: "Password is Required"
    }
});

userSchema.methods.verifyPassword = function(password) {
    return bcrypt.compareSync(password, this.hash_password);
}

const User = mongoose.model("User", userSchema);
module.exports = User;