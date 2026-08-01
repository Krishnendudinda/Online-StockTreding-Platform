const mongoose = require("mongoose");

const { Schema }= require("mongoose");

module.exports.OrdersSchema = new mongoose.Schema({
    name: String,
    price: Number,
    qty: Number,
    mode: String
});