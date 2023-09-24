import asyncHandler from 'express-async-handler';
import generateToken from '../utils/generateToken.js';
import User from '../models/userModel.js';

// @desc	Authenticate user/set token
// Route	post  /api/user/auth
// access	Public
const authUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    generateToken(res, user._id);
  res.status(200).json({
    _id: user._id,
    name: user.name,
    username: user.username,
    email: user.email
  });
  console.log('User Logged In:', user);
	} else {
		res.status(401);
    throw new Error('Invalid email or password')
	}
});

// @desc	Resgister a new user/set token
// Route	post  /api/user
// access	Public
const registerUser = asyncHandler(async (req, res) => {
	const { name, username, email, password } = req.body;
	// Check if email or username already exists
  const existingUser = await User.findOne({
    $or: [{ email }, { username }],
  });

  if (existingUser) {
    res.status(400);
    throw new Error('Email or username already exists');
  }

	const user = await User.create({
		name,
		username,
		email,
		password
	});
    if (user) {
      generateToken(res, user._id);
		res.status(201).json({
			_id: user._id,
			name: user.name,
			username: user.username,
			email: user.email
		});
    console.log('User Created:', user);
	} else {
		res.status(400);
    throw new Error('Invalid user data')
	}
});

// @desc	Logout user
// Route	post  /api/user/logout
// access	Public
const logoutUser = asyncHandler(async (req, res) => {
  res.cookie('jwt', '', {
    httpOnly: true,
    expires: new Date(0)
  });
	res.status(200).json({ message: 'User Logged Out' });
});

// @desc	Get user profile
// Route	GET  /api/user/profile
// access	Private
const getUserProfile = asyncHandler(async (req, res) => {
	const user = {
		_id: req.user._id,
		name: req.user.name,
		email: req.user.email,
		username: req.user.username,
    studentEmail: req.user.studentEmail,
		verified: req.user.verified,
    points: req.user.points,
	}
	res.status(200).json(user);
});

// @desc	Update user profile
// Route	PUT  /api/user/profile
// access	Private
const updateUserProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user._id);

  if (user) {
    // Check if the new email already exists in the database
    if (req.body.email && req.body.email !== user.email) {
      const emailExists = await User.findOne({ email: req.body.email });
      if (emailExists) {
        res.status(400);
        throw new Error('Email already exists');
      }
    }

    // Check if the new username already exists in the database
    if (req.body.username && req.body.username !== user.username) {
      const usernameExists = await User.findOne({ username: req.body.username });
      if (usernameExists) {
        res.status(400);
        throw new Error('Username already exists');
      }
    }

    // Update user profile fields
    user.name = req.body.name || user.name;
    user.email = req.body.email || user.email;
    user.username = req.body.username || user.username;
    user.studentEmail = req.body.studentEmail || user.studentEmail;

    if (req.body.password) {
      user.password = req.body.password;
      res.status(200).json({ message: 'Password updated successfully' });
    }

    const updatedUser = await user.save();
    
    res.status(200).json({
      _id: updatedUser._id,
      name: updatedUser.name,
      email: updatedUser.email,
      username: updatedUser.username,
    });
  } else {
    res.status(404);
    throw new Error('User not found');
  }
});

// @desc Get all blog posts and sort by timestamp
// Route GET /api/blog
// Access Public
const getAllBlogPosts = asyncHandler(async (req, res) => {
  // Fetch all blog posts from the database and sort by timestamp in descending order
  const allBlogPosts = await BlogPost.find()
    .populate('user') // Assuming 'user' is the field referencing the user who posted the blog
    .sort({ timestamp: -1 }); // Sort by timestamp in descending order (latest posts first)

  res.status(200).json(allBlogPosts);
});

// @desc Get user's blog posts (My Blog)
// Route GET /api/user/blog
// Access Private
const getUserBlogPosts = asyncHandler(async (req, res) => {
  const userId = req.user._id; // Get the user ID from the authenticated user

  // Fetch the user's blog posts from the database
  const userBlogPosts = await BlogPost.find({ user: userId });

  res.status(200).json(userBlogPosts);
}); 

// @desc Create a new blog post
// Route POST /api/blog
// Access Private (assuming users need to be logged in to create a blog post)
const createBlogPost = asyncHandler(async (req, res) => {
  const { title, content } = req.body;

  // You can access the currently logged-in user's information from req.user
  const userId = req.user._id;

  // Create a new blog post
  const newBlogPost = new BlogPost({
    title,
    content,
    user: userId, // Associate the post with the user who created it
  });

  // Save the new blog post to the database
  const createdBlogPost = await newBlogPost.save();

  res.status(201).json(createdBlogPost);
});

// @desc	Get user resources
// Route	GET  /api/user/Resources
// access	Private
const getUserResources = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'User Resources' });
});

// @desc	Post a user resources
// Route	POST  /api/user/resources
// access	Private
const postUserResources = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'Post user Resources' });
});

// @desc	Get user payments history
// Route	GET  /api/user/payments
// access	Private
const getUserPayment = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'User payments history' });
});

// @desc	Send a user payments
// Route	POST  /api/user/payments
// access	Private
const postUserPayment = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'Payment sent' });
});

export {
	authUser,
	registerUser,
	logoutUser,
	getUserProfile,
	updateUserProfile,
	getAllBlogPosts,
	getUserBlogPosts,
  createBlogPost,
	getUserPayment,
	postUserPayment,
	getUserResources,
	postUserResources
};