const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

router.post('/', userController.createUser);
router.get('/:id', userController.getUserById);
router.put('/:id/save-tool', userController.saveToolToUser);

module.exports = router;
