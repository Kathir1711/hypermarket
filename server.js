const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost/hypermarket', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Models
const Product = mongoose.model('Product', new mongoose.Schema({
  name: String,
  price: Number,
  description: String
}));

// Routes
app.get('/api/products', (req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(500).send(err));
});

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
