const postItem = require("../controller/CartItemController.js").insertItems;
const inCart = require("../controller/CartItemController.js").itemsInCart;
const removeItem = require("../controller/CartItemController.js").deleteItem;
const express = require("express");

const router = express.Router();

router.post("/insertItem", postItem);
router.get("/cart", inCart);
router.delete("/cart/:id", removeItem);

module.exports = router;
