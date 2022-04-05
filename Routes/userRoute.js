const express = require('express');
const userController = require('../Controllers/userController');
const authController = require('../Controllers/authController');
const router = express.Router();

router.route('/')
    .patch(authController.protect, userController.uploadUserPhoto, userController.updateMe)
    .delete(authController.protect, userController.deleteMe)

module.exports = router;