import express from "express";
const router = express.Router();
import {
	authUser,
	registerUser,
	logoutUser,
	getUserProfile,
	updateUserProfile,
  deleteUserProfile,
  createPost,
	getAllPosts,
	getUserPosts,
  updatePost,
  deletePost,
  getAllBlogs,
  postUserResources,
	getUserResources,
  updateUserResources,
  deleteUserResources,
  postUserPayment,
	getUserPayment,
} from "../controllers/userController.js";
import { protect, isAdmin } from "../middleware/authMiddleware.js";

// Register a new user
router.post('/', registerUser);

// Authenticate a user
router.post('/auth', authUser);

// Logout a user
router.post('/logout', logoutUser);

// Get, update and delete a user profile
router
.route('/profile')
.get(protect, getUserProfile)
.put(protect, updateUserProfile)
.delete(protect, deleteUserProfile);

// Route for getting all blogs
router
.route("/blogs")
.get(protect, getAllBlogs);

// Route for getting all posts
router
.route("/blogs")
.get(protect, getAllPosts);

// Get, create, update and delete user posts
router
.route('/blog')
.get(protect, getUserPosts)
.post(protect, createPost)
.put(protect, updatePost)
.delete(protect, deletePost);

// Get, create, update and delete user resources
router
.route('/resources')
.get(protect, getUserResources)
.post(protect, postUserResources)
.put(protect, updateUserResources)
.delete(protect, deleteUserResources);

// Get and create a user payments history
router
.route('/payments')
.get(protect, getUserPayment)
.post(protect, postUserPayment);

export default router;