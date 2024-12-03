import express from "express";
import { createDepartment, getDepartments, getSingleDepartment, searchDept, updateDept } from "../controllers/departmentController.js";
import { auth } from "../middleware/auth.js";
import restrict from "../middleware/isAdmin.js";
const router = express.Router();

// create dept
router.post("/create",auth, restrict("admin", "super-admin") ,createDepartment)
// fetch all depts
router.get("/all-departments",auth,restrict("admin", "super-admin"),getDepartments);
// Route to get a single department by ID
router.get("/departments/:id", auth, restrict("admin", "super-admin"), getSingleDepartment); 
// search for users
router.get("/dept/search", auth,restrict("admin", "super-admin"), searchDept);
// patch
router.patch("/:deptId",updateDept);
export default router