import express from "express";
const router = express.Router();
import {
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
} from "../controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

// Register a new user
router.post('/', registerUser);

// Authenticate a user
router.post('/auth', authUser);

// Logout a user
router.post('/logout', logoutUser);

// Get and update a user profile
router.route('/profile')
.get(protect, getUserProfile)
.put(protect, updateUserProfile);

// Get and post a user blogs
router.route('/blog')
.get(protect, getUserBlogPosts)
.post(protect, createBlogPost);

// New route for getting all blog posts
router.route("/blogs").get(protect, getAllBlogPosts);

// Get and post a user resources
router.route('/resources')
.get(protect, getUserResources)
.post(protect, postUserResources);

// Get and post a user payments history
router.route('/payments')
.get(protect, getUserPayment)
.post(protect, postUserPayment);

export default router;