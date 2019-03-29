const express = require('express');
const router = express.Router();
const user = require('../controllers').user;

//user는 delete, update 불가
/**
 * readPostListbyUser
 * readCommentListbyUser
 * : The same function exists in graphql.
 */

router
  .route('/')
  .post(user.createUser) //add new user
  .get(user.readUserList); //get all users

//user logout, remove user sessionId from session and cookie
//this is must be first

router.get('/logout', user.logout);

//this is must be later than logout route
router.get('/:id', user.readUserbyId); //get user by id
router.get('/:id/post', user.readPostListbyUser); //get all posts by user id
router.get('/:id/comment', user.readCommentListbyUser); //get all comments by user id

module.exports = router;
