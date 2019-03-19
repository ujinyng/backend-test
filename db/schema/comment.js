const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'user' },
  content: String,
  date: { type: Date, defualt: Date.now },
});

module.exports = mongoose.model('comment', commentSchema);
