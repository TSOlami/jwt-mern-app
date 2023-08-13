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

export {
	authUser,
	registerUser,
	logoutUser,
	getUserProfile,
	updateUserProfile
};