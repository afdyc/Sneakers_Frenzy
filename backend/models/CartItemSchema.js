const mongoose = require("mongoose");

const CartItemSchema = new mongoose.Schema({
  shoeName: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  size: { type: String, required: true },
  user: { type: String, required: true },
});

module.exports = mongoose.model("CartItem", CartItemSchema);
