const express = require('express');
const router = express.Router();
const controll = require('../controllers').comment;

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
router.post('/', controll.createComment);

//get comment by id
router.get('/:id', controll.readCommentbyId);

//update comment
router.patch('/:id', controll.updateComment);

//remove comment
router.delete('/:id', controll.deleteComment);

module.exports = router;
