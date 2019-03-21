const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  name: { type: String, default: '' },
  create_date: { type: Date, default: Date.now },
  post: [{ type: mongoose.Schema.Types.Number, ref: 'post', default: '' }],
  comment: [
    {
      type: Number,
      ref: 'comment',
      default: '',
    },
  ],
  sessionId: {type: String, default:''}
});
module.exports = mongoose.model('user', userSchema);
