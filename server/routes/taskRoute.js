import express from "express";
import { createTask, deleteTask, editTask, getAllTasks, getAssignedTasks, getSingleTask, getTaskById } from "../controllers/taskController.js"; 
import { auth } from "../middleware/auth.js";
import restrict from "../middleware/isAdmin.js";

const router = express.Router();

// creat task
router.post("/tasks",auth,restrict("admin", "super-admin"), createTask); 
// Route to get all tasks
router.get('/',auth,restrict("admin", "super-admin"), getAllTasks);
 
// Route to delete a task by ID
router.delete('/:id',auth,restrict("admin", "super-admin"), deleteTask);

// Route to edit a task by ID
router.patch('/:id',auth,restrict("admin", "super-admin"), editTask);
// get a single taks
router.get("/:id",auth,restrict("admin", "super-admin"),getTaskById)
// employee's assigned task
router.get('/tasks/assigned',auth,getAssignedTasks);
// employee gets a single task
router.get("/tasks/:taskId",auth,getSingleTask)
export default router;
