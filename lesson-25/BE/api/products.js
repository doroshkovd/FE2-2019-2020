const express = require('express');
const router = express.Router();

const mongoose = require('mongoose');
const productsSchema = require('../models/products.schema');
const Product = mongoose.model('Product', productsSchema);

router.get('/', async (req, res) => {
  try {
    const products = await Product.find();

    res.status(200).json({
      message: 'GET all products',
      body: products
    });
  } catch (e) {
    res.status(500).json({
      message: 'Error',
      error: e
    });
  }
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const product = await Product.findOne({_id: id})
    res.status(200).json({
      message: 'GET product by Id',
      body: product
    });
  } catch (e) {
    return res.status(500).json({
      message: 'Error',
      error: e,
    });
  }
});

router.post('/', (req, res) => {
  const body = req.body;
  const product = new Product({
    ...body,
  });

  return product.save()
    .then((prod) => {
      res.status(201).json({
        message: 'Product was added',
        body: prod
      })
    }).catch((err) => {
      res.status(500).json({
        message: 'Error',
        error: err
      });
  });
});

router.delete('/:id', (req, res) => {
  // some logic
});

router.put('/:id', (req, res) => {
  // some logic
});

module.exports = router;

