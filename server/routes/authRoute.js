import express from "express";
const router = express.Router();
import { forgotPassword, resetPassword, signIn, signup, verify } from "../controllers/authController.js";
import restrict from "../middleware/isAdmin.js";
import { auth } from "../middleware/auth.js";


// sign up route
router.post("/signup",auth,restrict("admin", "super-admin"),signup);
router.get("/verify",auth,verify)
// router.post("/signup",signup);
// sign in route
router.post("/signin" , signIn);
// forgot password route
router.post("/forgotpassword",forgotPassword)
// reset password route
router.put("/resetpassword/:resetToken", resetPassword)
export default router