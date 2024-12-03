import express from "express";
import { employees, getEmployeeById, getEmployeeProfile, searchUsers, updateEmployee } from "../controllers/employeesController.js";
import { auth } from "../middleware/auth.js";
import restrict from "../middleware/isAdmin.js";
const router = express.Router();


// patch
router.patch("/:employeeId",updateEmployee);

// get
router.get("/users",auth,restrict("admin", "super-admin"),employees );
// search for users
router.get("/users/search", auth,restrict("admin", "super-admin"), searchUsers);
// Route to get a single employee by ID
router.get('/:id',auth,restrict("admin", "super-admin"), getEmployeeById);
// Route for employees seeing thier own profile
router.get("/user/profile",auth,getEmployeeProfile)

export default router