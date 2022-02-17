const express = require('express');
const router = express.Router();

const {
  createOrder,
  getOrder,
  updatePayment,
  getOrderMine,
} = require('../controllers/orderController');

router.route('/orders').post(createOrder);
router.route('/orders/mine').get(getOrderMine);
router.route('/orders/:id').get(getOrder);
router.route('/orders/:id/pay').put(updatePayment);

module.exports = router;
