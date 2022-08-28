import moment from "moment";
import { v4 as uuidv4 } from 'uuid'; 
import CategoryModel from "../models/CategoryModel";
import Helper from "../utils/Helper";
import { Request, Response } from "express";
import { ICreateCategory, IDeleteCategory, IUpdateCategory } from "../utils/Types";

    export function getAllCategories(req: Request,res: Response){

        CategoryModel.getData(res)

    }

    export function getCategoryById(req: Request, res: Response){

        let id : string = req.params.id;

        CategoryModel.getDataById(res,id);

    }

    export function createCategory(req: Request,res: Response){

        // data post
        let id : string = uuidv4();
        let name : string = req.body.category_name;
        let color : string = req.body.category_color;
        let createdBy : string = req.body.category_created_by;
        let updatedBy : string = req.body.category_updated_by;
        let timeNow : string = moment().format("YYYY-MM-DD hh:mm:ss");
    

        if(!name || name === "" || name.match(/^ *$/) !== null || !color || color.match(/^ *$/) !== null ){

            Helper.responseError(res, true, 401, "Please insert category name");
            
        }else{

            let data : ICreateCategory = {

                "id" : id,
                "category_name" : name,
                "category_color" : color,
                "category_created_at" : timeNow,
                "category_created_by" : createdBy,
                "category_updated_at" : timeNow,
                "category_updated_by" : updatedBy,
    
            }
            //model create
            CategoryModel.createData(res, data);
        }


       

    }

    export function updateCategory(req: Request, res: Response){

        let id : string = req.params.id;
        let name : string = req.body.category_name;
        let color : string = req.body.category_color;
        let user : string = req.body.category_updated_by;
        let timeNow : string = moment().format("YYYY-MM-DD hh:mm:ss");

        if(!name || name === "" || name.match(/^ *$/) !== null || !color || color.match(/^ *$/) !== null){

    
            Helper.responseError(res, true, 401, "Please insert category name");
        
        }else{

            //data for response if success
            let data : IUpdateCategory = {

                "id" : id,
                "category_name" : name,
                "category_color" : color,
                "category_updated_at" : timeNow,
                "category_updated_by" : user,
            }

            CategoryModel.updateData(res, data);
            
        }

    }


    export function deleteCategory(req: Request, res: Response){

        let id : string = req.params.id;
        let user : string = req.body.category_deleted_by;
        let timeNow : string = moment().format("YYYY-MM-DD hh:mm:ss");

        let data : IDeleteCategory = {
            "id" : id,
            "category_deleted_by" : user,
            "category_deleted_at" : timeNow 
        }
        
        CategoryModel.deleteData(res, data);

    }


