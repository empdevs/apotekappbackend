import moment from "moment";
import { v4 as uuidv4 } from 'uuid'; 
import DrugModel from "../models/DrugModel";
import Helper from "../utils/Helper";
import fs from 'fs-extra';
import { Request, Response } from "express";
import { ICreateDrug, IDeleteDrug, IDeleteImage, IUpdateDrug, IUploadImageDrug } from "../utils/Types";

export function getAllDrugs(req: Request, res: Response){

    DrugModel.getData(res);

}

export function getDrugById(req: Request, res: Response){

    let id : string = req.params.id

    DrugModel.getDataById(res,id);

}

export function createDrug(req: Request, res: Response){
   
    let id : string = uuidv4();
    let categoryId : string = req.body.category_id;
    let name : string = req.body.drug_name;
    let stock : number = req.body.drug_stock;
    let price : number = req.body.drug_price;
    let benefit : string = req.body.drug_benefit;
    let createdBy : string = req.body.drug_created_by;
    let updatedBy : string = req.body.drug_updated_by;
    let timeNow : string = moment().format("YYYY-MM-DD hh:mm:ss");

    if((!name || name.match(/^ *$/) !== null)|| (!stock || stock <= 0 ) || (!price || price <= 0) || (!categoryId || categoryId.match(/^ *$/) !== null)){

        Helper.responseError(res, true, 401, "Please fill in the fields correctly and stock at least one !");

    }else{

        let data : ICreateDrug = {

            "id" : id,
            "category_id" : categoryId,
            "drug_name" : name,
            "drug_stock" : stock,
            "drug_price" : price,
            "drug_benefit": benefit,
            "drug_created_at" : timeNow,
            "drug_created_by" : createdBy,
            "drug_updated_at" : timeNow,
            "drug_updated_by" : updatedBy,

        }

        DrugModel.createData(res, data);

    }

}

export function updateDrug(req: Request, res: Response){

    let id : string = req.params.id;
    let categoryId : string = req.body.category_id;
    let name : string = req.body.drug_name;
    let stock : number = req.body.drug_stock;
    let price : number = req.body.drug_price;
    let benefit : string = req.body.drug_benefit;
    let picture : string = req.body.drug_picture;
    let updatedBy : string = req.body.drug_updated_by;
    let timeNow = moment().format("YYYY-MM-DD hh:mm:ss");

    if((!categoryId || categoryId.match(/^ *$/) !== null)  || (!name || name.match(/^ *$/) !== null)|| (!stock || stock <= 0 ) || (!price || price <= 0 )){

        Helper.responseError(res, true, 401, "Please insert require field");

    }else{

        let data : IUpdateDrug = {

            "id" : id,
            "category_id" : categoryId,
            "drug_name" : name,
            "drug_stock" : stock,
            "drug_price" : price,
            "drug_benefit": benefit,
            "drug_picture" : picture,
            "drug_updated_at" : timeNow,
            "drug_updated_by" : updatedBy,

        }

        DrugModel.updateData(res, data);

    }

}

export function deleteDrug(req: Request, res: Response){

    let id : string = req.params.id;
    let picture : string = req.body.drug_picture;
    let deletedBy : string = req.body.drug_deleted_by;
    let timeNow : string = moment().format("YYYY-MM-DD hh:mm:ss");

    
    let data : IDeleteDrug = {

        "id" : id,
        "drug_picture" : "",
        "drug_deleted_at" : timeNow,
        "drug_deleted_by" : deletedBy,
    }

    if(picture || picture.match(/^ *$/) !== null){

        fs.remove(`uploads/drug_images/${picture}`, function(error: Error){

            if(error){

                console.log(error);

                Helper.responseError(res, true, 401, "Failed delete image");

            }else{

                console.log("Success delete file");
            
                DrugModel.deleteData(res, data);

            }

        });

    }else{

    
        DrugModel.deleteData(res, data);

    }

}

export function uploadImage(req: Request, res: Response){

    let id : string = req.params.id;
    let picture : any = req.file?.filename; 
    let timeNow : string = moment().format("YYYY-MM-DD hh:mm:ss");
    let updatedBy : string = "system";

    let data : IUploadImageDrug = {
        "id" : id,
        "drug_picture" : picture,
        "drug_updated_at" : timeNow,
        "drug_updated_by" : updatedBy
    }

    DrugModel.uploadImage(res,data);


}


export function deleteImage(req: Request, res: Response){

    let id : string = req.params.id;
    let picture : string = req.body.drug_picture;
    let updatedBy : string = req.body.drug_updated_by;
    let timeNow : string = moment().format("YYYY-MM-DD hh:mm:ss");

    fs.remove(`uploads/drug_images/${picture}`, function(error: Error){

        if(error){

            console.log(error);

            Helper.responseError(res, true, 401, "Failed delete image");

        }else{

            console.log("Delete file success");

            let data : IDeleteImage = {

                "id" : id,
                "drug_picture" : "",
                "drug_updated_at" : timeNow,
                "drug_updated_by" : updatedBy,
    
            }

            DrugModel.deleteImage(res,data);
            
        }

    });

}


