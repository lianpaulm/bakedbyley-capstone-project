const express = require('express');
const router = express.Router();

// controllers
const {
  getAllProducts,
  createProduct,
} = require('../controllers/productsController');

router.get('/products', getAllProducts);
router.post('/products', createProduct);

module.exports = router;
