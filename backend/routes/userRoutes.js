const express = require('express');
const router = express.Router();

// controllers
const {
  registerUser,
  loginUser,
  logout,
  getAllUsers,
  getSingleUser,
} = require('../controllers/userController');

router.route('/register').post(registerUser);
router.route('/login').post(loginUser);
router.route('/logout').get(logout);
router.route('/admin/users').get(getAllUsers);
router.route('/admin/users/:id').get(getSingleUser);

module.exports = router;
