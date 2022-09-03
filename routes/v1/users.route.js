const express = require("express");
const userControllers = require("../../controllers/user.controller");
const router = express.Router();
const fs = require("fs");

router.route("/user/all").get(userControllers.getAllUser);
router.route("/user/random").get(userControllers.getRandomUser);
router.route("/user/save").post(userControllers.saveNewUser);

module.exports = router;
