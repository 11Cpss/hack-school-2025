const express = require('express');
const router = express.Router();

//const pollController = require('../controllers/pollController');
const {getPoll, getPolls, postVote, postPoll} = require('../controllers/pollController');
router.get('/polls/id/:id', getPoll);
//object destructuring, so basically if we did a normal object like postController, it will inherit everything from the require(file name), but by destructuring it, we will save 
router.get('/polls', getPolls);

router.post('/polls', postPoll);

router.post('/vote', postVote);

module.exports = router;