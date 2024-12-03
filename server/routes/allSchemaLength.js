import express from "express";
const router = express.Router();
import restrict from "../middleware/isAdmin.js";
import { auth } from "../middleware/auth.js";
import { allSchemaCount } from "../controllers/allSchemaLength.js";


router.get("/count",auth,restrict("admin", "super-admin"), allSchemaCount)

export default router