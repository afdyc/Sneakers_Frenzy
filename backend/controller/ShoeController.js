const Shoes = require("../models/ShoeSchema.js");

exports.getShoes = async (req, res) => {
  try {
    const allShoes = await Shoes.find();
    res.json(allShoes);
  } catch (error) {
    const status = res.status(404).json({ message: error.message });
    console.log(status);
  }
};

exports.addShoe = async (req, res) => {
  const newProduct = new Shoes(req.body);
  try {
    const newShoe = await newProduct.save();
    res.status(201).json(newShoe);
  } catch (error) {
    const status = res.status(400).json({ message: error.message });
    console.log(status);
  }
};

exports.deleteShoe = async (req, res) => {
  try {
    const dropShoe = await Shoes.deleteOne({ _id: req.params.id });
    res.status(200).json(dropShoe);
  } catch (error) {
    const status = res.status(404).json({ message: error.message });
    console.log(status);
  }
};
