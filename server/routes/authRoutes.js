const express = require('express');
const {signupValidation, loginValidation} = require('../middleware/authValidation')
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/register', signupValidation, authController.registerUser);
router.post('/login', loginValidation, authController.loginUser);
router.get('/logout', authController.logoutUser);

module.exports = router;
