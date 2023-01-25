const mongoose = require("mongoose");

const ShoesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  picture: { type: String, required: true },
  // picture: { data: Buffer, contentType: String },
});

module.exports = mongoose.model("Shoes", ShoesSchema);
