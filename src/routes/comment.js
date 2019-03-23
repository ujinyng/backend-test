const express = require('express');
const router = express.Router();
const controll = require('../controllers').comment;

//write new comment
router
  .post('/', controll.createComment)

  //get all comments by post id
  //The same function exists in graphql.
  .get('/', controll.readCommentListbyPost);

//get comment by id
router
  .get('/:id', controll.readCommentbyId)

  //update comment
  .patch('/:id', controll.updateComment)

  //remove comment
  .delete('/:id', controll.deleteComment);

module.exports = router;
