const express = require('express');
const router = express.Router();
const controll = require('../controllers').user;

//user는 delete, update 불가

//add new user
router.post('/', controll.createUser);

//get all users
router.get('/', controll.readUserList);

//get user by id
router.get('/:id', controll.readUserbyId);

//user logout, remove user sessionId from session and cookie
router.get('/logout', controll.logout);

/**
 * no more need
 * use graphql
 */
// //get all posts by user id
// router.get('/:id/post', function(req, res) {
//   model.post
//     .find({ author: req.params.author })
//     .then(result => res.json(result))
//     .catch(err => res.status(500).send(err));
// });

// //get all comments by user id
// router.get('/:id/comment', function(req, res) {
//   model.comment
//     .find({ author: req.params.author })
//     .then(result => res.json(result))
//     .catch(err => res.status(500).send(err));
// });

module.exports = router;
