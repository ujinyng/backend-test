const express = require('express');
const router = express.Router();
const post = require('../controllers').post;
const commentRouter = require('./comment');

router
  .route('/')
  .post(post.createPost) //write new post
  .get(post.readPostList); //get all posts

router
  .route('/:id')
  .get(post.readPostbyId) //get post by id
  .patch(post.updatePost) //update post
  .delete(post.deletePost); //remove post

router.get('/:postId/comments', commentRouter);

module.exports = router;
