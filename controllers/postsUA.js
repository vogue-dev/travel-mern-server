import PostsUA from '../models/postsUA.js';

export const getPostsUA = async (req, res) => {
	try {
		const postMessages = await PostsUA.find();
		await console.log('getPostsUA', postMessages);

		res.status(200).json(postMessages);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createPostUA = async (req, res) => {
	// const postsCountStr = await Users.countDocuments({});
	const body = req.body;

	const newPost = new PostsUA(body);

	try {
		await newPost.save().then(console.log('new post success added'));

		res.status(201).json(newPost);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};
