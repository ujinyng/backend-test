const model = require('../../db/mongoose').model;
const Post = model.post;
const User = model.User;

exports.createPost = function(req, res) {
  User.findOne({ sessionId: req.sessionID })
    .select('_id')
    .then(result => {
      if (result._id !== null) {
        req.body.author = result._id;
        console.log(`author is changed to ${req.body.author}`);
      }
    })
    .then(result => {
      Post.create(req.body)
        .then(result => res.send(req.body))
        .catch(err => res.status(500).send(err));
    })
    .catch(err => res.send(err));
};

exports.readPostList = function(req, res) {
  Post.find()
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err));
};

exports.readPostbyId = function(req, res) {
  Post.findOne({ _id: req.params.id })
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err));
};

exports.updatePost = function(req, res) {
  Post.findByIdAndUpdate(req.params.id, req.body)
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err));
};

exports.deletePost = function(req, res) {
  Post.remove({ _id: req.params.id })
    .then(result => {
      if (result.n === 0)
        res.send(`ID ${req.params.id} post does not exist at the board`);
      else res.send(`remove the post`);
    })
    .catch(err => res.status(500).send(err));
};
