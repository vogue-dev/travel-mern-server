import mongoose from 'mongoose';

const postsUASchema = mongoose.Schema({
    title: String,
    titleStatus: {
        tyle: String,
        default: '',
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

const PostsUA = mongoose.model('ua-posts', postsUASchema);

export default PostsUA;
