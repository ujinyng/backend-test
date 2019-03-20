const express = require('express');
let router = express.Router();
const commentRouter = require('./comment');
const model = require('../../db/mongoose').model;

//get all posts
router.get('/', function(req, res) {
  model.post
    .find()
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err));
});

//write new post
router.post('/', function(req, res) {
  const post = new model.post({
    _id: req.body._id,
    author: req.body.authorId,
    title: req.body.title,
    content: req.body.content,
  });
  model.post
    .create(req.body)
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err));
});

//get post
router.get('/:id', function(req, res) {
  model.post
    .findOne({ _id: req.params.id })
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err));
});

//update post
router.patch('/:id', function(req, res) {
  model.post
    .findByIdAndUpdate(req.params.id, req.body)
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err));
});

//remove post
router.delete('/:id', function(req, res) {
  model.post
    .remove({ _id: req.params.id })
    .then(result => {
      if (result.n === 0)
        res.send(`ID ${req.params.id} does not exist at post`);
      else res.send(`remove the post`);
    })
    .catch(err => res.status(500).send(err));
});

//comment router
router.use('/comment', commentRouter);

module.exports = router;
