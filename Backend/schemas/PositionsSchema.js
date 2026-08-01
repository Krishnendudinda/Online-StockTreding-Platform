const mongoose = require("mongoose");

const { Schema } = require("mongoose");

module.exports.PositionsSchema = new mongoose.Schema({
    product: String,
    name: String,
    qty: Number,
    avg: Number,
    price: Number,
    net: String,
    day: String,
    isLoss: Boolean
});
