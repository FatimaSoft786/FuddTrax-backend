const express = require("express");
const {register,login,fetchUsers} = require("../controller/User");
const router = express.Router();
router.post("/register",register);
router.post("/login",login);
router.get("/fetch",fetchUsers);

module.exports = router;