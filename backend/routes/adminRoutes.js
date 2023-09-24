import express from 'express';
const router = express.Router();
import { protect, isAdmin } from '../middleware/authMiddleware.js';

import {
  getAllPayments,
} from '../controllers/adminController.js';

// Define admin routes and protect them with admin middleware
router.route('/all-payments').get(protect, isAdmin, getAllPayments);
// Define other admin routes here

export default router;
