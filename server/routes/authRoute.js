import express from "express";
const router = express.Router();
import { forgotPassword, resetPassword, signIn, signup, verify } from "../controllers/authController.js";
import restrict from "../middleware/isAdmin.js";
import { auth } from "../middleware/auth.js";


router.post("/signup",auth,restrict("admin", "super-admin"),signup);
router.get("/verify",auth,verify)
router.post("/signin" , signIn);
router.post("/forgotpassword",forgotPassword)
router.put("/resetpassword/:resetToken", resetPassword)
export default router