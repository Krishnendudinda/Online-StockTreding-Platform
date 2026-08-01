const mongoose = require("mongoose");

const { model } = require("mongoose");

const { PositionsSchema } = require("../schemas/positionsSchema");

const PositionsModel = mongoose.model("position", PositionsSchema);

module.exports = { PositionsModel };