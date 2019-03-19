const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  create_date: { type: Date, defualt: Date.now },
  post: { type: mongoose.Schema.Types.ObjectId, ref: 'post' },
  comment: { type: mongoose.Schema.Types.ObjectId, ref: 'comment' },
});
module.exports = mongoose.model('user', userSchema);
