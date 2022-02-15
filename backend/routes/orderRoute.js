const express = require('express');
const router = express.Router();

const { createOrder, getOrder } = require('../controllers/orderController');

router.route('/orders').post(createOrder);
router.route('/orders/:id').get(getOrder);

module.exports = router;
