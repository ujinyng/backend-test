process.env.NODE_ENV = process.env.NODE_ENV || 'development';
require('dotenv').config();
const URI = process.env.MONGO_URI || 'localhost';
const DB = process.env.MONGO_DB || 'board';

const express = require('express');
const mongoose = require('../db/mongoose');
const coockieParser = require('cookie-parser');
const router = require('./routes');
const apolloserver = require('./graphql');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const morgan = require('morgan');

const app = express();
const db = mongoose.dbconnect;
const model = mongoose.model;

if (process.env.NODE_ENV == 'production') {
  console.log('Production Mode');
} else if (process.env.NODE_ENV == 'development') {
  console.log('Development Mode');
}
app.use(express.json());
app.use(morgan('combined'));
app.use(coockieParser());
app.use(
  session({
    key: 'sid',
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: new MongoStore({
      url: `mongodb://${URI}/${DB}`,
      collection: 'sessions',
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 2, // two weeks
    },
  }),
);

app.use('/api', router);
apolloserver.applyMiddleware({ app });
const server = app.listen(3000);
console.log('Server running at http://localhost:3000');

process.on('SIGTERM', function() {
  server.close(function() {
    process.exit(0);
  });
});
