// Vendor libs
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

require('dotenv').config();

const { PORT, MONGODB_URL } = process.env;

// Custom libs
const Product = require('./models/product');

const app = express();
app.use(bodyParser.json());

// Mongodb connection
mongoose.connect(`${MONGODB_URL}`, {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on(
  'error',
  console.error.bind(console, 'connection error:')
);
db.once('open', function () {
  console.log('Connection to MongoDB success');
});

// Routes
app.get('/', (req, res) => {
  res.json('hello world');
});

app.get('/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post('/products', async (req, res) => {
  const { name, price, description } = req.body;
  const result = await Product.create({
    name,
    price,
    description,
  });
  res.json(result);
});

app.get('/products/:id', async (req, res) => {
  const { id } = req.params;
  const result = await Product.findById(id);
  res.json(result);
});

app.put('/products/:id', async (req, res) => {
  const { id } = req.params;
  const { name, price, description } = req.body;
  const p = await Product.findById(id);
  if (!p) {
    res.status(404).json('Product does not exist');
  }
  p.name = name;
  p.price = price;
  p.description = description;

  const result = await p.save();
  res.json(result);
});

app.delete('/products/:id', async (req, res) => {
  const { id } = req.params;
  const p = await Product.findById(id);
  if (!p) {
    res.status(404).json('Product does not exists');
  }
  const result = await p.delete();
  res.json(result);
});

// Start server
app.listen(PORT, () => {
  console.log(`Express listening on port ${PORT}`);
});
