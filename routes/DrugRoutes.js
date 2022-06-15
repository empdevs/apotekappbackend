import express  from "express";
import { createDrug } from "../controllers/DrugController.js";

const router = express.Router();

router.post('/', createDrug);

export default router;