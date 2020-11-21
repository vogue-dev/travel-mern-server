import PostsUa from '../models/postsUa.js';

export const getPostsUa = async (req, res) => {
    try {
        const postMessages = await PostsUa.find();
        await console.log('getPostsUa', postMessages);

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPostUa = async (req, res) => {
    // const postsCountStr = await Users.countDocuments({});
    const body = req.body;

    const newPost = new PostsUa(body);

    try {
        await newPost.save().then(console.log('new post success added'));

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
