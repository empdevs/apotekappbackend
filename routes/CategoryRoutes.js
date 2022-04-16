import express from "express";
import { getAllCategories , createCategory, updateCategory, deleteCategory } from "../controllers/CategoryController.js";

const router = express.Router();

// routing api after /api/category/
router.get('/', getAllCategories);
router.post('/', createCategory);
router.put('/:id', updateCategory);
router.put('/:id/delete/', deleteCategory);

export default router;