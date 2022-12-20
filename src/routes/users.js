const express = require("express");
const userCtrl = require('../controllers/users.controller')
const router = express.Router();


//register user
router.post("/users", userCtrl.registerUser );




module.exports = router;
