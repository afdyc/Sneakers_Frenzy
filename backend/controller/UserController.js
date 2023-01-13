const Users = require("../models/UserSchema.js");
const bcrypt = require("bcrypt");
const saltRounds = 10;

exports.getUser = async (req, res) => {
  try {
    const allUser = await Users.find();
    res.json(allUser);
  } catch (error) {
    const status = res.status(404).json({ message: error.message });
    console.log(status);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await Users.findById(req.params.id);
    res.json(user);
  } catch (error) {
    const status = res.status(404).json({ message: error.message });
    console.log(status);
  }
};

exports.addUser = async (req, res) => {
  const usrnm = req.body.username;
  const pswd = req.body.password;

  //providing bcrypt hash to user's password
  const hashPswd = await bcrypt.hash(pswd, saltRounds);

  //checking if username already exist
  Users.findOne({ username: usrnm }, async (err, user) => {
    if (user) {
      res.status(500).json("username is used, please use a different username");
    } else {
      //insert new user
      const newComer = new Users({
        username: usrnm,
        password: hashPswd,
      });

      try {
        const newUser = await newComer.save();
        res.status(201).json(newUser);
      } catch (error) {
        const status = res.status(400).json({ message: error.message });
        console.log(status);
      }
    }
  });
};

exports.deleteUser = async (req, res) => {
  try {
    const dropUser = await Users.deleteOne({ _id: req.params.id });
    res.status(200).json(dropUser);
  } catch (error) {
    const status = res.status(404).json({ message: error.message });
    console.log(status);
  }
};

exports.checkUser = async (req, res) => {
  Users.findOne({ username: req.body.username }, async (err, user) => {
    if (!user) {
      console.log("user not found");
      return res.status(404).send();
    } else {
      try {
        if (await bcrypt.compare(req.body.password, user.password)) {
          console.log("loggedin");
          return res.json(user._id);
        } else {
          return res.status(404).send();
        }
      } catch (error) {
        console.log(error);
      }
    }
  });
};
