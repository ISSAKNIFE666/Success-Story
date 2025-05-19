const express = require('express');
const router = express.Router();
const { addCategory, getCategories, getCategory, updateCategory, deleteCategory } = require('../controllers/categories');

router.post('/', addCategory);
router.get('/', getCategories);
router.get('/:id', getCategory);
router.put('/:id', updateCategory);
router.delete('/:id', deleteCategory);

module.exports = router;
