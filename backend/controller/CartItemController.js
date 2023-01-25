const CartItem = require("../models/CartItemSchema.js");

exports.itemsInCart = async (req, res) => {
  try {
    const inCart = await CartItem.find();
    res.status(200).json(inCart);
  } catch (error) {
    const status = res.status(404).json({ message: error.message });
    console.log(status);
  }
};

exports.insertItems = async (req, res) => {
  const addItems = new CartItem({
    shoeName: req.body.shoeTitle,
    price: req.body.shoeCost,
    image: req.body.shoePicture,
    size: req.body.finalSize,
    user: req.body.userLoggedin,
  });
  try {
    const saveItems = await addItems.save();
    res.status(201).json(saveItems);
  } catch (error) {
    const status = res.status(400).json({ message: error.message });
    console.log(status);
  }
};

exports.deleteItem = async (req, res) => {
  try {
    const discardItem = await CartItem.deleteOne({ _id: req.params.id });
    res.status(201).json(discardItem);
  } catch (error) {
    const status = res.status(404).json({ message: error.message });
    console.log(status);
  }
};
