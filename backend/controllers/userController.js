import asyncHandler from express-asnyc-handler;

// @desc	Authenticate user/set token
// Route	post  /api/user/auth
// access	Public
const authUser = asyncHandler(async (req, res) => {
	res.status(200).json({ message: 'Auth User' })
});

export {
	authUser
};