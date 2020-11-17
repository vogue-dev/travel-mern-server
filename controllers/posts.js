import Posts from '../models/posts.js';

export const getPosts = async (req, res) => {
	try {
		const postMessages = await Posts.find();
		console.log('getPostsEU', postMessages);

		res.status(200).json(postMessages);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};

export const createPost = async (req, res) => {
	// const postsCountStr = await Users.countDocuments({});
	const body = req.body;

	const newPost = new Posts(body);

	try {
		await newPost.save().then(console.log('new post success added'));

		res.status(201).json(newPost);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};
