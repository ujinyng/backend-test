const express = require('express');
const router = express.Router();
const postRouter = require('./post');
const userRouter = require('./user');

router.use('/posts', postRouter);
router.use('/users', userRouter);

module.exports = router;
