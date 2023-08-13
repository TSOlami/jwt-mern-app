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



export {
	authUser
};