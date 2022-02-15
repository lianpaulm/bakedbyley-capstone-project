const Order = require('../models/orderModel');
const asyncWrapper = require('../middleware/asyncWrapper');

const createOrder = asyncWrapper(async (req, res) => {
  if (req.body.orderItems.length === 0) {
    res.status(400).json({ message: 'Cart is empty' });
  }
  const order = new Order({
    orderItems: req.body.orderItems,
    shippingAddress: req.body.shippingAddress,
    paymentMethod: req.body.paymentMethod,
    itemPrice: req.body.itemPrice,
    shippingPrice: req.body.shippingPrice,
    totalPrice: req.body.totalPrice,
  });
  const createdOrder = await order.save();
  res.status(201).json({ message: 'New Order Created', order: createdOrder });
});

const getOrder = asyncWrapper(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    res.status(404).json({ message: 'Order Not Found' });
  }
  res.status(200).json({ order });
});

module.exports = { createOrder, getOrder };
