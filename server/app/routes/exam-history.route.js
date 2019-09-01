const express = require('express');
const router = express.Router();

const { examHistoryController: controller } = require('../controllers');

router.get('/', controller.findAll);

router.post('/', controller.create);

router.get('/:_id', controller.findById);

router.put('/:_id', controller.update);

router.delete('/:_id', controller.remove);

module.exports = router;
