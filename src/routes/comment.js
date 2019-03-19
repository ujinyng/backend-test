const express = require('express');
const router = express.Router();

//get all comments
router.get('/', function(req, res) {});

//write new comment
router.post('/', function(req, res) {});

//get comment
router.get('/:id', function(req, res) {});

//remove comment
router.delete('/:id', function(req, res) {});

//update comment
router.patch('/:id', function(req, res) {});

module.exports = router;
