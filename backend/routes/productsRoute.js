const express = require('express');
const router = express.Router();

// controllers
const {
  getAllProducts,
  createProduct,
  getFeaturedProducts,
  getProductDetails,
  deleteProduct,
  updateProduct,
  getAdminProducts,
} = require('../controllers/productsController');

router.route('/products').get(getAllProducts);
router.route('/admin/products').get(getAdminProducts);
router.route('/products/featured').get(getFeaturedProducts);
router.route('/products/new').post(createProduct);
router
  .route('/products/:id')
  .get(getProductDetails)
  .delete(deleteProduct)
  .put(updateProduct);

module.exports = router;
