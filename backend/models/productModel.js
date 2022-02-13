const mongoose = require('mongoose');

// only the properties that you set in your schema will be passed on the database

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'product name must be provided'],
    trim: true,
  },
  image: {
    type: String,
    required: [true, 'product image must be provided'],
  },
  category: {
    type: String,
    required: [true, 'product category must be provided'],
  },
  description: {
    type: String,
    required: [true, 'product description must be provided'],
  },
  variation: {
    type: String,
    required: [true, 'product variation must be provided'],
  },
  price: {
    type: [
      {
        variationName: {
          type: String,
          required: [true, 'variationName must be provided'],
        },
        price: {
          type: Number,
          required: [true, 'product price must be provided'],
          maxLength: [8, 'Price cannot exceed 8 characters'],
        },
      },
    ],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Product', productSchema);
