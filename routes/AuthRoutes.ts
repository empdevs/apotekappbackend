import express, { Router } from "express";
import { login } from "../controllers/AuthController";

const router : Router = express.Router();

// routing api after /api/category/
router.post('/login', login);
export default router;