const express = require("express");
const {AddMenu,FetchMenu,FetchMenuDetails,updateMenu} = require("../controller/Menu");
const router = express.Router();
router.post("/add",AddMenu);
router.post("/fetch",FetchMenu);
router.post("/fetchMenuDetails",FetchMenuDetails);
router.post("/update-menu/:id",updateMenu)

 module.exports = router;