const Order = require('../models/orderModel');
const asyncWrapper = require('../middleware/asyncWrapper');

const createOrder = asyncWrapper(async (req, res) => {
  if (req.body.orderItems.length === 0) {
    return res.status(400).json({ message: 'Cart is empty' });
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
    return res.status(404).json({ message: 'Order Not Found' });
  }
  res.status(200).json({ order });
});

const updatePayment = asyncWrapper(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (!order) {
    return res.status(404).json({ message: 'Order Not Found' });
  }
  order.isPaid = true;
  order.paidAt = Date.now();
  order.paymentResult = {
    id: req.body.id,
    status: req.body.status,
    update_time: req.body.update_time,
    email_address: req.body.email_address,
  };
  const updatedOrder = await order.save();
  res.json({ message: 'Order Paid', order: updatedOrder });
});

const getOrderMine = asyncWrapper(async (req, res) => {
  const orders = await Order.find({ orderId: req._id });
  if (!orders) {
    return res.status(404).json({ message: 'Orders Not Found' });
  }
  res.json({ orders });
});

// ADMIN
// get order -- admin
const getOrderAdmin = asyncWrapper(async (req, res) => {
  const orders = await Order.find({ orderId: req._id });
  if (!orders) {
    return res.status(404).json({ message: 'Orders Not Found' });
  }
  res.json({ orders });
});

// update order -- admin
const updateOrderAdmin = asyncWrapper(async (req, res) => {
  const { id: orderId } = req.params;
  const order = await Order.findOneAndUpdate({ _id: orderId }, req.body, {
    new: true,
    runValidators: true,
  });
  if (!order) {
    return res.status(404).json({ msg: `No order with id: ${orderId}` });
  }
  res.status(200).json({ order });
});

const editDeliverAdmin = asyncWrapper(async (req, res) => {
  const order = await Order.findById(req.params.id);
  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();
    res.send({ message: 'Order Delivered', order: updatedOrder });
  } else {
    res.status(404).send({ message: 'Order Not Found' });
  }
});

module.exports = {
  createOrder,
  getOrder,
  updatePayment,
  getOrderMine,
  getOrderAdmin,
  updateOrderAdmin,
  editDeliverAdmin,
};
