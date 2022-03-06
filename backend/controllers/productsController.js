const Product = require('../models/productModel');
const asyncWrapper = require('../middleware/asyncWrapper');

const getAllProducts = asyncWrapper(async (req, res) => {
  const products = await Product.find({ disabled: false });
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
  const products = await Product.find({ featured: true, disabled: false });
  res.status(200).json({ products });
});

// get all products -- admin
const getAdminProducts = asyncWrapper(async (req, res) => {
  const products = await Product.find({});
  res.status(200).json({ products });
});

// create product -- admin
const createProduct = asyncWrapper(async (req, res) => {
  const product = await Product.create(req.body);
  res.status(201).json({ product });
});

// delete product -- admin
const deleteProduct = asyncWrapper(async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findOneAndDelete({ _id: productId });
  if (!product) {
    return res.status(404).json({ msg: `No task with id: ${productId}` });
  }
  res.status(200).json({ product });
});

// update product -- admin
const updateProduct = asyncWrapper(async (req, res) => {
  const { id: productId } = req.params;
  const product = await Product.findOneAndUpdate({ _id: productId }, req.body, {
    new: true,
    runValidators: true,
  });

  if (!product) {
    return res.status(404).json({ msg: `No task with id: ${productId}` });
  }

  res.status(200).json({ product });
});

module.exports = {
  getAllProducts,
  createProduct,
  getFeaturedProducts,
  getProductDetails,
  deleteProduct,
  updateProduct,
  getAdminProducts,
};
