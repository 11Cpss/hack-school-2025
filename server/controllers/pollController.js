const Poll = require("../models/Poll");

// TODO
// ACTIVITY 2a - Implement getPolls function (return all polls)
const getPolls = async() => {
console.log("Returning all polls")
const polls = await Poll.find()
return polls
}
    

// ACTIVITY 2b - Implement getPoll function (get one poll by id)
const getPoll = async(id) => {
    const poll = await Poll.findById(id)
    console.log(`Return Poll ${id}`)
    return poll
}
// END ACTIVITY 2

// TODO
// ACTIVITY 3a - Implement postPoll function to create a new poll
const postPoll = async ({ownerId, title, description, options }) => {

console.log("Creating the pole rn");

    const poll = new Poll({
        ownerId, title, description, options
    });
    await poll.save();
    console.log("New poll has been created:", poll)
    return poll;
}
// ACTIVITY 3b - Implement postVote function to cast a vote

// ACTIVITY 3c - Implement module exports

// END ACTIVITY 3
module.exports = {getPolls, getPoll}