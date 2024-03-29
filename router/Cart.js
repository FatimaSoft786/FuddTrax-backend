const express = require("express");
const {cart,get,deleteFromCart,updateCart} = require("../controller/Cart");
const router = express.Router();
router.post("/create",cart);
router.get("/",get);
router.post("/delete",deleteFromCart);
router.post("/update/:id",updateCart)
module.exports = router;