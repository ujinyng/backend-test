const express = require('express');
const router = express.Router();
const comment = require('../controllers').comment;

/**
 * readCommentListbyPost :
 * The same function exists in graphql.
 *  */

router
  .route('/')
  .post(comment.createComment) //write new comment
  .get(comment.readCommentListbyPost); //get all comments by post id

router
  .route('/:id')
  .get(comment.readCommentbyId) //get comment by id
  .patch(comment.updateComment) //update comment
  .delete(comment.deleteComment); //remove comment

module.exports = router;
