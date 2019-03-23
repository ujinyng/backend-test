const express = require('express');
const router = express.Router();
const controll = require('../controllers').user;

//user는 delete, update 불가

//add new user
router
  .post('/', controll.createUser)

  //get all users
  .get('/', controll.readUserList);

//user logout, remove user sessionId from session and cookie
//this is must be first
router.get('/logout', controll.logout);

//get user by id
//this is must be later
router.get('/:id', controll.readUserbyId);

//get all posts by user id
//The same function exists in graphql.
router.get('/:id/post', controll.readPostListbyUser);

//get all comments by user id
//The same function exists in graphql.
router.get('/:id/comment', controll.readCommentListbyUser);

module.exports = router;
