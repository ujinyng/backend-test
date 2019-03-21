const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  author: { type: Number, ref: 'user', required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  date: { type: Date, default: Date.now },
  /**
   * no more need
   */
  // comment: [
  //   {
  //     type: Number,
  //     ref: 'comment',
  //     default: '',
  //   },
  // ],
});

module.exports = mongoose.model('post', postSchema);
