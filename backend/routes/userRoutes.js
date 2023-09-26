import express from "express";

// Create an instance of an Express Router to define routes.
const router = express.Router();

// Import controllers and middleware
import {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
  deleteUserProfile,
  postBlogPost,
  getAllBlogPosts,
  getUserBlogPosts,
  updateBlogPost,
  deleteBlogPost,
  postUserResources,
  getUserResources,
  updateUserResources,
  deleteUserResources,
  postUserPayment,
  getUserPayment,
} from "../controllers/userController.js";

import { protect, isAdmin } from "../middleware/authMiddleware.js";

/**
 * Register a new user.
 *
 * @route POST /api/v1/users/
 * @access Public
 */
router.post('/', registerUser);

/**
 * Authenticate a user.
 *
 * @route POST /api/v1/users/auth
 * @access Public
 */
router.post('/auth', authUser);

/**
 * Logout a user.
 *
 * @route POST /api/v1/users/logout
 * @access Private (Requires authentication)
 */
router.post('/logout', logoutUser);

/**
 * Get, update, and delete a user profile.
 *
 * @route GET /api/v1/users/profile
 * @route PUT /api/v1/users/profile
 * @route DELETE /api/v1/users/profile
 * @access Private (Requires authentication)
 */
router
  .route('/profile')
  .get(protect, getUserProfile)
  .put(protect, updateUserProfile)
  .delete(protect, deleteUserProfile);

/**
 * Get all blog posts.
 *
 * @route GET /api/v1/users/blogs
 * @access Private (Requires authentication)
 */
router.route("/blogs").get(protect, getAllBlogPosts);

/**
 * Get, create, update, and delete user blogs.
 *
 * @route GET /api/v1/users/blog
 * @route POST /api/v1/users/blog
 * @route PUT /api/v1/users/blog
 * @route DELETE /api/v1/users/blog
 * @access Private (Requires authentication)
 */
router
  .route('/blog')
  .get(protect, getUserBlogPosts)
  .post(protect, postBlogPost)
  .put(protect, updateBlogPost)
  .delete(protect, deleteBlogPost);

/**
 * Get, create, update, and delete user resources.
 *
 * @route GET /api/v1/users/resources
 * @route POST /api/v1/users/resources
 * @route PUT /api/v1/users/resources
 * @route DELETE /api/v1/users/resources
 * @access Private (Requires authentication)
 */
router
  .route('/resources')
  .get(protect, getUserResources)
  .post(protect, postUserResources)
  .put(protect, updateUserResources)
  .delete(protect, deleteUserResources);

/**
 * Get and create user payment history.
 *
 * @route GET /api/v1/users/payments
 * @route POST /api/v1/users/payments
 * @access Private (Requires authentication)
 */
router
  .route('/payments')
  .get(protect, getUserPayment)
  .post(protect, postUserPayment);

export default router;
