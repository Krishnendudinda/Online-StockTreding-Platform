const mongoose = require('mongoose');

const { SellingsSchema } = require('../schemas/SellingsSchema');

const SellingsModel = mongoose.model("sell", SellingsSchema);

module.exports = { SellingsModel };