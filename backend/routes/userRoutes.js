import express from "express";
const router = express.Router();
import {
	authUser,
	registerUser,
	logoutUser,
	getUserProfile,
	updateUserProfile
} from "../controllers/userController.js";

router.post('/auth', authUser);

export default router;