const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.json('hello world');
});

app.post('/product', (req, res) => {
  const { name, price } = req.body;
  res.json({ name, price });
});

app.listen(3000, () => {
  console.log('Express listening on port 3000');
});
