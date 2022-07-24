import moment from "moment";
import { v4 as uuidv4 } from 'uuid'; 
import DrugModel from "../models/DrugModel.js";
import Helper from "../utils/Helper.js";
import fs from 'fs-extra';

export function getAllDrugs(req, res){

    DrugModel.getData(res);

}

export function getDrugById(req, res){

    let id = req.params.id

    DrugModel.getDataById(res,id);

}

export function createDrug(req, res){
   
    let id = uuidv4();
    let categoryId = req.body.category_id;
    let name = req.body.drug_name;
    let stock = req.body.drug_stock;
    let price = req.body.drug_price;
    let benefit = req.body.drug_benefit;
    let createdBy = req.body.drug_created_by;
    let updatedBy = req.body.drug_updated_by;
    let timeNow = moment().format("YYYY-MM-DD hh:mm:ss");

    if((!name || name.match(/^ *$/) !== null)|| (!stock || stock <= 0 ) || (!price || price <= 0) || (!categoryId || categoryId.match(/^ *$/) !== null)){

        Helper.responseError(res, true, 401, "Please fill in the fields correctly and stock at least one !");

    }else{

        let data = {

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

export function updateDrug(req, res){

    let id = req.params.id;
    let categoryId = req.body.category_id;
    let name = req.body.drug_name;
    let stock = req.body.drug_stock;
    let price = req.body.drug_price;
    let benefit = req.body.drug_benefit;
    let picture = req.body.drug_picture;
    let updatedBy = req.body.drug_updated_by;
    let timeNow = moment().format("YYYY-MM-DD hh:mm:ss");

    if((!categoryId || categoryId.match(/^ *$/) !== null)  || (!name || name.match(/^ *$/) !== null)|| (!stock || stock <= 0 ) || (!price || price <= 0 )){

        Helper.responseError(res, true, 401, "Please insert require field");

    }else{

        let data = {

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

export function deleteDrug(req, res){

    let id = req.params.id;
    let picture = req.body.drug_picture;
    let deletedBy = req.body.drug_deleted_by;
    let timeNow = moment().format("YYYY-MM-DD hh:mm:ss");

    
    let data = {

        "id" : id,
        "drug_picture" : "",
        "drug_deleted_at" : timeNow,
        "drug_deleted_by" : deletedBy,
    }

    if(picture || picture.match(/^ *$/) !== null){

        fs.remove(`uploads/drug_images/${picture}`, function(error){

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

export function uploadImage(req,res){

    let id = req.params.id;
    let picture = req.file.filename 
    let timeNow = moment().format("YYYY-MM-DD hh:mm:ss");
    let updatedBy = "system";

    let data = {
        "id" : id,
        "drug_picture" : picture,
        "drug_updated_at" : timeNow,
        "drug_updated_by" : updatedBy
    }

    DrugModel.uploadImage(res,data);


}


export function deleteImage(req, res){

    let id = req.params.id;
    let picture = req.body.drug_picture;
    let updatedBy = req.body.drug_updated_by;
    let timeNow = moment().format("YYYY-MM-DD hh:mm:ss");

    fs.remove(`uploads/drug_images/${picture}`, function(error){

        if(error){

            console.log(error);

            Helper.responseError(res, true, 401, "Failed delete image");

        }else{

            console.log("Delete file success");

            let data = {

                "id" : id,
                "drug_picture" : "",
                "drug_updated_at" : timeNow,
                "drug_updated_by" : updatedBy,
    
            }

            DrugModel.deleteImage(res,data);
            
        }

    });

}


