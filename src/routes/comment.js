const express = require('express');
const router = express.Router();
const postRouter = require('./post');

const model = require('../../db/mongoose').model;

/**
 * no more need
 * use graphql
 */
// //get all comments by post id
// router.get('/', function(req, res) {
//   model.comment
//     .find({ post: req.query.pid })
//     .then(result => res.json(result))
//     .catch(err => res.status(500).send(err));
// });

//write new comment
router.post('/', function(req, res) {
  model.user
    .findOne({ sessionId: req.sessionID })
    .select('_id')
    .then(result => {
      if (result._id !== null) {
        req.body.author = result._id;
        console.log(`author is changed to ${req.body.author}`);
      }
    })
    .then(result => {
      model.comment
        .create(req.body)
        .then(result => res.send(req.body))
        .catch(err => res.status(500).send(err));
    })
    .catch(err => res.send(err));
});

//get comment by id
router.get('/:id', function(req, res) {
  model.comment
    .findOne({
      _id: req.params.id,
    })
    .then(result => res.json(result))
    .catch(err => res.status(500).send(err));
});

//update comment
router.patch('/:id', function(req, res) {
  model.comment
    .findByIdAndUpdate(
      {
        id: req.params.id,
      },
      req.body,
    )
    .then(result => res.send(result))
    .catch(err => res.status(500).send(err));
});

//remove comment
router.delete('/:id', function(req, res) {
  model.comment
    .remove({ _id: req.params.id })
    .then(result => {
      if (result.n === 0)
        res.send(`ID ${req.params.id} comment does not exist at the post`);
      else res.send(`remove the comment`);
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;
