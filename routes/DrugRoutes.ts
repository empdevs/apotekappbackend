import express  from "express";
import { createDrug, getAllDrugs, updateDrug , deleteDrug, getDrugById, uploadImage, deleteImage} from "../controllers/DrugController";
import multer from "multer";

const router = express.Router();

//storage file
const storage = multer.diskStorage({
    destination: function (req: any, file: any, cb: any) {
        // console.log(req, file, cb);
      cb(null, "uploads/drug_images/");
    },
    filename: function (req: any, file: any, cb: any) {
        // console.log(file);
        let fileNameOriginal = file.originalname;
        let extFile = fileNameOriginal.split(".").pop();
        let resultName = `${file.fieldname}-${Date.now()}.${extFile}`;
      cb(null,resultName);
    },
  });

//middlewire
const upload = multer({storage:storage});

router.get('/', getAllDrugs);
router.post('/', createDrug);
router.put('/:id/update/', updateDrug);
router.put('/:id/delete/', deleteDrug);
router.get('/:id/', getDrugById);
router.post('/:id/upload/',upload.single('file'), uploadImage);
router.put('/:id/images/delete/', deleteImage);

export default router;