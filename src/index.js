process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const express = require('express');
const ApolloServer = require('apollo-server-express');
const mongoose = require('../db/mongoose');
const coockieParser = require('cookie-parser');
const router = require('./routes/index');
const server = require('./graphql/index');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);
const morgan = require('morgan');

const app = express();
const db = mongoose.db;
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
      url: 'mongodb://localhost/board',
      collection: 'sessions',
    }),
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7 * 2, // two weeks
    },
  }),
);

app.use('/api', router);
server.applyMiddleware({ app });
app.listen(3000);
console.log('Server running at http://localhost:3000');
