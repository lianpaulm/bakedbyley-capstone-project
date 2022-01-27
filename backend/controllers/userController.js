const User = require('../models/userModel');
const asyncWrapper = require('../middleware/asyncWrapper');

// register a user
const registerUser = asyncWrapper(async (req, res) => {
  const user = await User.create(req.body);
  res.status(201).json({ user });
});

// login user
const loginUser = asyncWrapper(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ msg: 'Please enter email and password' });
  }

  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    return res.status(401).json({ msg: 'Invalid email and password' });
  }

  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return res.status(401).json({ msg: 'Invalid email and password' });
  }

  res.status(200).json({ user });
});

// logout user
const logout = asyncWrapper(async (req, res) => {
  res.status(200).json({ msg: 'Logged Out' });
});

// get all users -- admin
const getAllUsers = asyncWrapper(async (req, res) => {
  const user = await User.find({});
  res.status(200).json({ user });
});

// get single user -- admin
const getSingleUser = asyncWrapper(async (req, res) => {
  const { id: userID } = req.params;
  const user = await User.findOne({ _id: userID });
  if (!user) {
    return res.status(404).json({ msg: 'user not found' });
  }
  res.status(200).json({ user });
});

module.exports = {
  registerUser,
  loginUser,
  logout,
  getAllUsers,
  getSingleUser,
};
