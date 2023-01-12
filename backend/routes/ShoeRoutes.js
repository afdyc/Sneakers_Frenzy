const shoeList = require("../controller/ShoeController.js").getShoes;
const addAnotherShoe = require("../controller/ShoeController.js").addShoe;
const dropShoe = require("../controller/ShoeController.js").deleteShoe;
const express = require("express");

const router = express.Router();

router.get("/shoelist", shoeList);
router.post("/newshoe", addAnotherShoe);
router.delete("/shoelist/:id", dropShoe);

module.exports = router;
