const express = require('express');
const router = express.Router();
const {getPolls, getPoll, postVote, postPoll} = require("../controllers/pollController")
//object destructuring, so basically if we did a normal object like postController, it will inherit everything from the require(file name), but by destructuring it, we will save 
// ACTIVITY: Create routes that call controller functions when rrequested
router.get("/polls", getPolls);
router.get("/polls/:id", getPoll);  
router.post("/vote/:id", postVote);
router.post("/polls", postPoll);



module.exports = router;
