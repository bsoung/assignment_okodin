const express = require('express')
const router = express.Router();
const {userController} = require('../controllers')




router.get('/', userController.showUsers)
  






module.exports = router;