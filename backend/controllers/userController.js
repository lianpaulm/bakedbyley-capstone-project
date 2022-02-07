const User = require('../models/userModel');
const asyncWrapper = require('../middleware/asyncWrapper');

// register a user
const registerUser = asyncWrapper(async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: 'Please enter name, email and password' });
  }
  if (name.length < 4) {
    return res
      .status(400)
      .json({ message: 'Name should be at least 4 characters' });
  }
  if (password.length <= 6) {
    return res
      .status(400)
      .json({ message: 'Password should be greater than 6 characters' });
  }

  const user = await User.create(req.body);
  res.status(201).json({ user });
});

// login user
const loginUser = asyncWrapper(async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    // const error = new Error('Please enter email and password');
    // error.status = 400;
    // return next(error);
    return res.status(400).json({ message: 'Please enter email and password' });
  }

  const user = await User.findOne({ email }).select('+password');
  if (!user) {
    return res.status(401).json({ message: 'Invalid email and password' });
  }

  const isPasswordMatched = await user.comparePassword(password);
  if (!isPasswordMatched) {
    return res.status(401).json({ message: 'Invalid email and password' });
  }

  res.status(200).json({ user });
});

// logout user
const logout = asyncWrapper(async (req, res) => {
  res.status(200).json({ message: 'Logged Out' });
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
    return res.status(404).json({ message: 'user not found' });
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
