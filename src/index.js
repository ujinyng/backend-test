process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('express');
const mongoose = require('../db/mongoose');
const router = require('./routes/index');

const app = express();
const db = mongoose.dbConnect();
const model = mongoose.model;

app.use('/', router);

app.listen(3000);
console.log('Server running at http://localhost:3000');
