const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        trim: true,
        unique: true,
        match: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    },
    twitterProvider: {
        type: {
            id: String,
            token: String
        },
        select: false
    }
});

const User = mongoose.model("user", userSchema);
module.exports = User;