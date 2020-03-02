const mongoose = require('mongoose');

const ProductsSchema = mongoose.Schema({
  name: String,
  price: String,
  description: String,
});

module.exports = ProductsSchema;
