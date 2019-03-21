const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  name: { type: String, default: '' },
  create_date: { type: Date, default: Date.now },
  sessionId: { type: String, default: '' },

  /** no more need **/
  // post: [{ type: Number, ref: 'post', default: '' }],
  // comment: [
  //   {
  //     type: Number,
  //     ref: 'comment',
  //     default: '',
  //   },
  // ],
});
module.exports = mongoose.model('user', userSchema);
