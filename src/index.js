const express = require('express');
const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

app.listen(3001, async () => {
    console.log('server started');
    await connect();
    console.log('Mongo db connected');
   
    const tweetRepo = new TweetRepository();
    const tweet = await tweetRepo.create({content: 'With hooks now'});
    console.log(tweet);
    // const tweet = await tweetRepo.getAll(0,4);
    // console.log(tweet[0].contentWithEmail);
});