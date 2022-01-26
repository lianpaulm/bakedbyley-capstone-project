const Product = require('../models/productModel');
const asyncWrapper = require('../middleware/asyncWrapper');

const getAllProducts = asyncWrapper(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ products });
});

// create product -- admin
const createProduct = asyncWrapper(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({ product });
});

module.exports = { getAllProducts, createProduct };
