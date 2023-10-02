import express from 'express';
const router = express.Router();
import { protect, isAdmin } from '../middleware/authMiddleware.js';

import {
  getAllPayments,
  getUserBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
} from '../controllers/adminController.js';

// Define admin routes and protect them with admin middleware

// Get all users payments
router.route('/all-payments').get(protect, isAdmin, getAllPayments);

// Get, create, update and delete user blogs
router
.route('/blog')
.get(protect, isAdmin, getUserBlogs)
.post(protect, isAdmin, createBlog)
.put(protect,isAdmin, updateBlog)
.delete(protect, isAdmin, deleteBlog);


export default router;
