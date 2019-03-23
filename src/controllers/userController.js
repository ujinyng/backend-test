const model = require('../../db/mongoose').model;
const User = model.user;
const Post = model.post;
const Comment = model.comment;

exports.createUser = function(req, res) {
  if (req.body.sessionId !== req.sessionID) {
    req.body.sessionId = req.sessionID;
    User.create(req.body)
      .then(result => res.send(result))
      .catch(err => res.status(500).send(err));
  } else {
    res.send(`${req.sessionID} is already exist`);
  }
};

exports.readUserList = function(req, res) {
  User.find()
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err));
};

exports.readUserbyId = function(req, res) {
  User.findOne({ _id: req.params.id })
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err));
};

exports.readPostListbyUser = function(req, res) {
  Post.find({ author: req.params.author })
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err));
};

exports.readCommentListbyUser = function(req, res) {
  Comment.find({ author: req.params.author })
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err));
};

exports.logout = function(req, res) {
  req.session.destroy(); // 세션 삭제
  res.clearCookie('sid'); // 세션 쿠키 삭제
  res.send('logout');
};
