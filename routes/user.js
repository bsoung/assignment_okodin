const express = require("express");
const router = express.Router();
const { userController, profileController } = require("../controllers");

// router.get("/", userController.showUsers);

router.get("/:userId", userController.showUserProfile);

router.get("/profile/new", (req, res) => {
	res.render("new_profile");
});

router.post("/profile/new", profileController.newProfile);

// router.post('/', userController.newUser);

module.exports = router;
