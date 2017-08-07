const express = require("express");
const router = express.Router();
const { userController, profileController } = require("../controllers");

// router.get("/", userController.showUsers);

router.get("/:userId", (req, res) => {
	res.send(`user page ${req.params.userId}`);
});

// router.post('/', userController.newUser);

module.exports = router;
