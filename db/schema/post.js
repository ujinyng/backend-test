const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  title: String,
  content: String,
  date: { type: Date, defualt: Date.now },
  comment: { type: mongoose.Schema.Types.ObjectId, ref: 'comment' },
});

module.exports = mongoose.model('post', postSchema);
