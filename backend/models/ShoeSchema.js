const mongoose = require("mongoose");

const ShoesSchema = mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  picture: { type: String, required: true },
});

module.exports = mongoose.model("Shoes", ShoesSchema);
