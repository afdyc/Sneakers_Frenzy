const express = require("express");
const allUser = require("../controller/UserController.js").getUser;
const getThisUser = require("../controller/UserController.js").getUserById;
const newUser = require("../controller/UserController.js").addUser;
const dropUser = require("../controller/UserController.js").deleteUser;
const validateUser = require("../controller/UserController.js").checkUser;

const router = express.Router();

router.get("/users", allUser);
router.get("/users/:id", getThisUser);
router.post("/newuser", newUser);
router.delete("/users/:id", dropUser);
router.post("/users/login", validateUser);

module.exports = router;
