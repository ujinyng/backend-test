const express = require('express');
const router = express.Router();

//user는 delete, update 불가

//get all posts by user id
router.get('/post/:id', function(req, res) {});

//get all comments by user id
router.get('/comment/:id', function(req, res) {});

module.exports = router;
