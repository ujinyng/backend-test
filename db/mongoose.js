const mongoose = require('mongoose');
const URI = process.env.MONGO_URI || 'localhost';
const DB = process.env.MONGO_DB || 'board';

const user = require('./schema/user');
const post = require('./schema/post');
const comment = require('./schema/comment');

const model = [];

function dbConnect() {
  const db = mongoose.connection;
  db.on('error', console.error);
  db.once('open', function() {
    console.log('Connected to mongod server');
  });

  mongoose.connect(`mongodb://${URI}/${DB}`, {
    useNewUrlParser: true,
  });

  model.push(user);
  model.push(post);
  model.push(comment);
}

module.exports = {
  model,
  dbConnect,
};
