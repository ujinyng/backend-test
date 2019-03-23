const express = require('express');
const router = express.Router();
const controll = require('../controllers').post;

//get all posts
router
  .get('/', controll.readPostList)

  //write new post
  .post('/', controll.createPost);

//get post by id
router
  .get('/:id', controll.readPostList)

  //update post
  .patch('/:id', controll.updatePost)

  //remove post
  .delete('/:id', controll.deletePost);

module.exports = router;
