const Product = require('../models/productModel');
const asyncWrapper = require('../middleware/asyncWrapper');

const getAllProducts = asyncWrapper(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ products });
});

const getProductDetails = asyncWrapper(async (req, res) => {
  const { id: productID } = req.params;
  const product = await Product.findOne({ _id: productID });
  if (!product) {
    return res.status(404).json({ msg: 'Product not found' });
  }
  res.status(200).json({ product });
});

const getFeaturedProducts = asyncWrapper(async (req, res) => {
  const products = await Product.find({ featured: true });
  res.status(200).json({ products });
});

// create product -- admin
const createProduct = asyncWrapper(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({ product });
});

// delete product -- admin
const deleteProduct = asyncWrapper(async (req, res) => {
  res.status(201).json({ msg: 'delete product' });
});

// update product -- admin
const updateProduct = asyncWrapper(async (req, res) => {
  res.status(201).json({ msg: 'update product' });
});

module.exports = {
  getAllProducts,
  createProduct,
  getFeaturedProducts,
  getProductDetails,
  deleteProduct,
  updateProduct,
};
