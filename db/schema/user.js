const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  _id: { type: Number, required: true },
  create_date: { type: Date, default: Date.now },
  post: [{ type: mongoose.Schema.Types.Number, ref: 'post', default: '' }],
  comment: [
    {
      type: mongoose.Schema.Types.Number,
      ref: 'comment',
      default: '',
    },
  ],
});
module.exports = mongoose.model('user', userSchema);
