// Vendor libs
const mongoose = require('mongoose');
const bluebird = require('bluebird');

// Mongoose promise settings
mongoose.Promise = bluebird;

// Schema definition
const ProductSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
});

// Model creation
const Product = mongoose.model('Product', ProductSchema);

// Exportation
module.exports = Product;
