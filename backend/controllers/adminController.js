import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import Payment from '../models/paymentModel.js'; // Assuming you have a Payment model

// @desc Get all payments for all users
// Route GET /api/v1/admin/payments
// Access Private (only accessible to admin users)
const getAllPayments = asyncHandler(async (req, res) => {
  // Fetch all payment records from the payment model
  const allPayments = await Payment.find().populate('user');

  res.status(200).json(allPayments);
});

// Other admin-specific controller functions here as needed

export {
  getAllPayments,
  // Other admin-specific controller functions here
};
