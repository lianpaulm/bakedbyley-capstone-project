const express = require('express');
const router = express.Router();

const { createOrder } = require('../controllers/orderController');

router.route('/orders').post(createOrder);

module.exports = router;
