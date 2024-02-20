import express from 'express';
import { connect } from './config/database.js';
const app = express();

import services from './services/tweet-service.js'

app.listen(3001, async () => {
    console.log('server started');
    await connect();
    console.log('Mongo db connected');
    let ser = new services();
    await ser.create({content: 'my other #CODe #works or #NOT ?'})

});