import express  from "express";
import { createDrug, getAllDrugs, updateDrug , deleteDrug, getDrugById} from "../controllers/DrugController.js";

const router = express.Router();

router.get('/', getAllDrugs);
router.post('/', createDrug);
router.put('/:id/update/', updateDrug);
router.put('/:id/delete/', deleteDrug);
router.get('/:id/', getDrugById);

export default router;