const express = require("express");
const {createOrder,fetchOrder,updateOrder,deleteOrder} = require("../controller/Order");
const router = express.Router();
router.post("/create",createOrder);
router.get("/",fetchOrder);
router.post("/update/:id",updateOrder);
router.delete("/delete",deleteOrder)
module.exports = router;