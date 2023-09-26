import express from 'express';

// Create an instance of an Express Router to define admin routes.
const router = express.Router();

// Import middleware for authentication and authorization.
import { protect, isAdmin } from '../middleware/authMiddleware.js';

// Import controllers for admin operations.
import {
  getAllPayments,
  // Add other admin controllers as needed
} from '../controllers/adminController.js';

/**
 * Get all payments (admin only).
 *
 * @route GET /api/v1/admin/all-payments
 * @access Private (Requires authentication and admin rights)
 */
router.route('/all-payments').get(protect, isAdmin, getAllPayments);

// Define other admin routes and their documentation here.

export default router;
