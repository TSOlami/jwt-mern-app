import asyncHandler from 'express-async-handler';

// @desc	Authenticate user/set token
// Route	post  /api/user/auth
// access	Public
const authUser = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'Auth User' })
});

// @desc	Resgister a new user/set token
// Route	post  /api/user
// access	Public
const registerUser = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'Register User' })
});

// @desc	Logout user
// Route	post  /api/user/logout
// access	Public
const logoutUser = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'Logout User' })
});

// @desc	Get user profile
// Route	GET  /api/user/profile
// access	Private
const getUserProfile = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'User Profile' })
});

// @desc	Update user profile
// Route	PUT  /api/user/profile
// access	Private
const updateUserProfile = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'Update user profile' })
});

// @desc	Get user Posts
// Route	GET  /api/user/blog
// access	Private
const getUserBlog = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'User blog posts' })
});

// @desc	Post a user blog
// Route	POST  /api/user/blog
// access	Private
const postUserBlog = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'Post user blog' })
});

// @desc	Get user resources
// Route	GET  /api/user/Resources
// access	Private
const getUserResources = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'User Resources' })
});

// @desc	Post a user resources
// Route	POST  /api/user/resources
// access	Private
const postUserResources = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'Post user Resources' })
});

// @desc	Get user payments history
// Route	GET  /api/user/payments
// access	Private
const getUserPayment = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'User payments history' })
});

// @desc	Send a user payments
// Route	POST  /api/user/payments
// access	Private
const postUserPayment = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'Payment sent' })
});

export {
	authUser,
	registerUser,
	logoutUser,
	getUserProfile,
	updateUserProfile,
	getUserBlog,
	postUserBlog,
	getUserPayment,
	postUserPayment,
	getUserResources,
	postUserResources
};