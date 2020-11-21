import PostsEu from '../models/postsEu.js';

export const getPostsEu = async (req, res) => {
    try {
        const postMessages = await PostsEu.find();
        console.log('getPostsEu', postMessages);

        res.status(200).json(postMessages);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
};

export const createPostEu = async (req, res) => {
    // const postsCountStr = await Users.countDocuments({});
    const body = req.body;

    const newPost = new PostsEu(body);

    try {
        await newPost.save().then(console.log('new post success added'));

        res.status(201).json(newPost);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
};
