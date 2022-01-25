const Product = require('../models/productModel');

const getAllProducts = (req, res) => {
  res.status(200).send('hello');
};

const createProduct = async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({ product });
};

module.exports = { getAllProducts, createProduct };
