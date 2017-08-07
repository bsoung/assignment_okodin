const express = require("express");
const router = express.Router();
const { userController, profileController } = require("../controllers");

// router.get("/", userController.showUsers);

router.post("/", (req, res) => {
	req.session["loggedIn"] = false;
	res.redirect("/login");
});

module.exports = router;
