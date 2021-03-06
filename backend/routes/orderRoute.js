const express = require('express');
const router = express.Router();

const {
  createOrder,
  getOrder,
  updatePayment,
  getOrderMine,
  getOrderAdmin,
  updateOrderAdmin,
  editDeliverAdmin,
  editCodPayment,
} = require('../controllers/orderController');

router.route('/orders').post(createOrder);
router.route('/orders/mine').get(getOrderMine);
router.route('/orders/admin').get(getOrderAdmin);
router.route('/orders/:id').get(getOrder).patch(updateOrderAdmin);
router.route('/orders/:id/deliver').put(editDeliverAdmin);
router.route('/orders/:id/pay').put(updatePayment);
router.route('/orders/:id/paycod').put(editCodPayment);

module.exports = router;
