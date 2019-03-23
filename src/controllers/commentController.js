const model = require('../../db/mongoose').model;
const Comment = model.comment;
const User = model.user;

exports.createComment = function(req, res) {
  User.findOne({ sessionId: req.sessionID })
    .select('_id')
    .then(result => {
      if (result._id !== null) {
        req.body.author = result._id;
        console.log(`author is changed to ${req.body.author}`);
      }
    })
    .then(result => {
      Comment.create(req.body)
        .then(result => res.json(req.body))
        .catch(err => res.status(500).send(err));
    })
    .catch(err => res.send(err));
};

exports.readCommentListbyPost = function(req, res) {
  Comment.find({ post: req.query.post })
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err));
};

exports.readCommentbyId = function(req, res) {
  Comment.findOne({
    _id: req.params.id,
  })
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err));
};

exports.updateComment = function(req, res) {
  Comment.findByIdAndUpdate(
    {
      id: req.params.id,
    },
    req.body,
  )
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err));
};

exports.deleteComment = function(req, res) {
  Comment.remove({ _id: req.params.id })
    .then(result => {
      if (result.n === 0)
        res.send(`ID ${req.params.id} comment does not exist at the post`);
      else res.send(`remove the comment`);
    })
    .catch(err => res.status(500).send(err));
};
