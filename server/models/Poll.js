const mongoose = require("mongoose");
const OptionSchema = new mongoose.Schema(
{
option: String, 
count: Number,
},
{   
    _id:true
}


);
const PollSchema = new mongoose.Schema(
{
description: String,
title: String,
ownerId: String,
Options:[OptionSchema],
totalVotes: Number
}
,
{
    id:true
}
)

const Poll = mongoose.model("Poll",PollSchema)
module.exports = Poll;