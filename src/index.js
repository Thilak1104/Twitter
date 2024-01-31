const express = require('express');
const connect = require('./config/database');
const app = express();

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');

app.listen(3002, async () => {
    console.log('server started');
    await connect();
    console.log('Mongo db connected');
    // const tweet = await Tweet.create({
    //     content:'Third tweet',
        
    // });
    // const tweets = await Tweet.find();
    // const tweet = await Tweet.findById('65ba5fcd8633329b5e392da8');
    // tweet.userEmail = 'b@c.com';
    // await tweet.save();
    const tweetRepo = new TweetRepository();
    // const tweet = await tweetRepo.create({content: ' tweet with a comment'});
    // console.log(tweet);
    // tweet.comments.push({content:'first comment'});
    // await tweet.save();
    // console.log(tweet);
    const tweet = await tweetRepo.getWithComments('65ba901fc511bbce28b1a598');
    // console.log(tweet);
    // const comment = await Comment.create({content: 'new comment'});
    // tweet.comments.push(comment);
    // await tweet.save();

    console.log(tweet);
});