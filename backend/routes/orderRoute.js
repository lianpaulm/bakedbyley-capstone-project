const express = require('express');
const router = express.Router();

const {
  createOrder,
  getOrder,
  updatePayment,
  getOrderMine,
  getOrderAdmin,
} = require('../controllers/orderController');

router.route('/orders').post(createOrder);
router.route('/orders/mine').get(getOrderMine);
router.route('/orders/admin').get(getOrderAdmin);
router.route('/orders/:id').get(getOrder);
router.route('/orders/:id/pay').put(updatePayment);

module.exports = router;
