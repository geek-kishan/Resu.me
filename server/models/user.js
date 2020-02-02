const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    email: {type: String, required: true},
    myfavourite: {type: [String], required: false},
    password: {type: String, required: true}
});

module.exports = mongoose.model("user",userSchema,"user");