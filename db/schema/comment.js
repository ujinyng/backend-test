const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  author: { type: Number, ref: 'user', required: true },
  content: { type: String, default: '' },
  date: { type: Date, default: Date.now },
  post: { type: Number, ref: 'post', required: true },
});

module.exports = mongoose.model('comment', commentSchema);
