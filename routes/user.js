const express = require("express");
const router = express.Router();
const { userController, profileController } = require("../controllers");

// router.get("/", userController.showUsers);

router.get("/:userId", userController.showUser);

// router.post('/', userController.newUser);

module.exports = router;
