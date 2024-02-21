import { LikeRepository, TweetRepository } from '../repository/index.js';
import Tweet from '../models/tweet.js';

class LikeService {
    constructor() {
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId, modelType, userId) { 
        try {
            console.log(modelId, modelType,userId);      //  /api/v1/likes/toggle?id=modelid&type=Tweet
            if (modelType == 'Tweet') {
            
                var likeable = await this.tweetRepository.find(modelId);
            
            }
            else if (modelType == 'Comment'){
                //TODO
            }
            else {
                throw new Error('Unknown model type');
            }

            const exists = await this.likeRepository.findByUserAndLikeable({
                user: userId,
                onModel: modelType,
                likeable: modelId
            });
            console.log("exists",exists);
            if(exists) {
                console.log("inside exists")
                likeable.likes.pull(exists);
                await likeable.save();
                await exists.deleteOne();
                var isAdded = false;
            }
            else{
                const newLike = await this.likeRepository.create({
                    user: userId,
                    onModel: modelType,
                    likeable: modelId
                });
                likeable.likes.push(newLike);
                await likeable.save();

                var isAdded = true;
            }
            return isAdded;
        } catch (error) {
            throw error;
        }
    }
}

export default LikeService;


