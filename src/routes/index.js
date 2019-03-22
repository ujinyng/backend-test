const express = require('express');
const router = express.Router();
const postRouter = require('./post');
const commentRouter = require('./comment');
const userRouter = require('./user');

router.use('/posts', postRouter);
router.use('/comments', commentRouter);
router.use('/users', userRouter);

module.exports = router;
