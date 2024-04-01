const express = require("express");
const {CheckoutSession,getSuccess,getCancel} = require("../controller/Payment");
const router = express.Router();
router.post("/checkout",CheckoutSession);
router.post("/success",getSuccess);
router.post("/cancel",getCancel);

 module.exports = router;