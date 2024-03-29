const express = require("express");
const {AddMenu,FetchMenu} = require("../controller/Menu");
const router = express.Router();
router.post("/add",AddMenu);
router.post("/fetch",FetchMenu)

 module.exports = router;