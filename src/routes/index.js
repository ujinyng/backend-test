const express = require('express');
const router = express.Router();
const postRouter = require('./post');
const commentRouter = require('./comment');
const userRouter = require('./user');

router.use('/post', postRouter);
router.use('/comment', commentRouter);
router.use('/user', userRouter);

module.exports = router;
