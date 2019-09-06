const router = require('express').Router();
const CategoryController = require('../controllers/category');

router.get('/', CategoryController.getCategories);

module.exports = router;