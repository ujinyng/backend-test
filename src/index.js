process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('express');
const mongoose = require('../db/mongoose');
const router = require('./routes/index');
const morgan = require('morgan');

const app = express();
const db = mongoose.dbConnect();
const model = mongoose.model;

if (process.env.NODE_ENV == 'production') {
  console.log('Production Mode');
} else if (process.env.NODE_ENV == 'development') {
  console.log('Development Mode');
}
app.use(express.json());
app.use(morgan('combined'));
app.use('/', router);

app.listen(3000);
console.log('Server running at http://localhost:3000');
