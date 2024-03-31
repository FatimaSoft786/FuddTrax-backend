const express = require("express");
const {AddMenu,FetchMenu,FetchMenuDetails} = require("../controller/Menu");
const router = express.Router();
router.post("/add",AddMenu);
router.post("/fetch",FetchMenu);
router.post("/fetchMenuDetails",FetchMenuDetails);

 module.exports = router;