const express = require('express');
let router = express.Router();
const commentRouter = require('./comment');

//get all posts
router.get('/', function(req, res) {
  res.send('get all posts');
});

//write new post
router.post('/', function(req, res) {});

//get post
router.get('/:id', function(req, res) {});

//remove post
router.delete('/:id');

//update post
router.patch('/:id');

//comment router
router.use('/comment', commentRouter);

module.exports = router;
