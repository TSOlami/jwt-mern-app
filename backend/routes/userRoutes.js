import express from "express";
const router = express.Router();
import {
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
} from "../controllers/userController.js";

// Register a new user
router.post('/', registerUser);

// Authenticate a user
router.post('/auth', authUser);

// Logout a user
router.post('/logout', logoutUser);

// Get and update a user profile
router.route('/profile').get(getUserProfile).put(updateUserProfile);

// Get and post a user blogs
router.route('/blog').get(getUserBlog).post(postUserBlog);

// Get and post a user resources
router.route('/resources').get(getUserResources).post(postUserResources);

// Get and post a user payments history
router.route('/payments').get(getUserPayment).post(postUserPayment);

export default router;