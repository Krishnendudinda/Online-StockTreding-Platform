const mongoose = require("mongoose");

//const { Schema }= require("mongoose");

module.exports.SellingsSchema = new mongoose.Schema({
    name: String,
    price: Number,
    qty: Number,
    mode: String
});