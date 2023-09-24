import jwt from 'jsonwebtoken';
import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';

const protect = asyncHandler(async (req, res, next) => {
	let token;

  token = req.cookies.jwt;

  if (token) {
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = await User.findById(decoded.userId).select('-password');

      next();
    } catch (error) {
      res.status(401);
      throw new Error('Not Authorized, Invalid Token');
    }
  } else {
    res.status(401);
    throw new Error('Not Authorized, no token');
  }
});

const isAdmin = (req, res, next) => {
  if (req.user && req.user.role === 'admin') {
    return next(); // User is an admin, continue with the request
  }
  res.status(403).json({ message: 'Access denied: Admin privileges required.' });
};

export { protect, isAdmin };