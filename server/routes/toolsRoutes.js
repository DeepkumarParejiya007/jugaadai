// /routes/oracle-sql/toolsRoutes.js
const express = require('express');
const router = express.Router();
const toolsController = require('../controllers/toolsController');

router.get('/search', toolsController.searchTools);
router.get('/', toolsController.getAllTools);
router.get('/:id', toolsController.getToolById);
router.post('/add', toolsController.addTool);

module.exports = router;
