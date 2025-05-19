const express = require('express');
const router = express.Router();
const { addOrder, getOrders, getOrder, updateOrder, deleteOrder } = require('../controllers/orders');

router.post('/', addOrder);
router.get('/', getOrders);
router.get('/:id', getOrder);
router.put('/:id', updateOrder);
router.delete('/:id', deleteOrder);

module.exports = router;
