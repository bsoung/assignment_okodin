const express = require("express");
const router = express.Router();
const { userController, profileController } = require("../controllers");

router.get("/", userController.showUsers);

module.exports = router;
