import mongoose from 'mongoose';

const postsUaSchema = mongoose.Schema({
    title: String,
    titleStatus: {
        type: String,
        default: 'default',
    },
    price: String,
    description: String,
    date: String,
    readingTime: {
        type: String,
        default: '2',
    },
    image: String,
    creator: {
        type: String,
        default: 'admin',
    },
    likeCount: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

const PostsUa = mongoose.model('ua-posts', postsUaSchema);

export default PostsUa;
