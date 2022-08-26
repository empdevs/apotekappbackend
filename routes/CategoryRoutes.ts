import express, { Router } from "express";
import { getAllCategories , createCategory, updateCategory, deleteCategory, getCategoryById } from "../controllers/CategoryController";

const router : Router = express.Router();

// routing api after /api/category/
router.get('/', getAllCategories);
router.get('/:id/', getCategoryById);
router.post('/', createCategory);
router.put('/:id/update/', updateCategory);
router.put('/:id/delete/', deleteCategory);

export default router;