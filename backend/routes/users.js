const express = require('express');
const router = express.Router();
const { addUser, getUsers, getUser, updateUser, deleteUser } = require('../controllers/users');

router.post('/', addUser);
router.get('/', getUsers);
router.get('/:id', getUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;
