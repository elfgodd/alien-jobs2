const express = require('express');
const router = express.Router();

const { UserController } = require('../controllers');

router.post('/users',
     UserController.insert);

router.get('/users',
     UserController.findAll);

router.get('/users/:id',
     UserController.findOneById);

router.patch('/users/:id',
     UserController.updateOne);

router.delete('/users/:id',
     UserController.deleteOne);

module.exports = router;