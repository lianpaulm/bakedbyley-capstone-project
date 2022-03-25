const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please enter your name'],
    maxLength: [30, ' Name cannot exceed 30 characters'],
    minlength: [4, 'Name should have more than 4 characters'],
  },
  email: {
    type: String,
    required: [true, 'Please enter your email'],
    validate: [validator.isEmail, 'Please enter a valid email'],
  },
  password: {
    type: String,
    required: [true, 'Please enter your password'],
    // minlength: [8, 'Password should be greater than 8 characters'],
    select: false,
  },
  role: {
    type: String,
    default: 'user',
  },
});

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});

// compare password
userSchema.methods.comparePassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

module.exports = mongoose.model('User', userSchema);
