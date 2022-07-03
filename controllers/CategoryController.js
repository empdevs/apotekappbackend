import moment from "moment";
import { v4 as uuidv4 } from 'uuid'; 
import CategoryModel from "../models/CategoryModel.js";
import Helper from "../utils/Helper.js";

    export function getAllCategories(req,res){

        CategoryModel.getData(res)

    }

    export function getCategoryById(req,res){

        let id = req.params.id;

        CategoryModel.getDataById(res,id);

    }

    export function createCategory(req,res){

        // data post
        let id = uuidv4();
        let name = req.body.category_name;
        let color = req.body.category_color;
        let createdBy = req.body.category_created_by;
        let updatedBy = req.body.category_updated_by;
        let timeNow = moment().format("YYYY-MM-DD hh:mm:ss");
    

        if(!name || name === "" || name.match(/^ *$/) !== null || !color || color.match(/^ *$/) !== null ){

            Helper.responseError(res, true, 401, "Please insert category name");
            
        }else{

            let data = {

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

    export function updateCategory(req, res){

        let id = req.params.id;
        let name = req.body.category_name;
        let color = req.body.category_color;
        let user = req.body.category_updated_by;
        let timeNow = moment().format("YYYY-MM-DD hh:mm:ss");

        if(!name || name === "" || name.match(/^ *$/) !== null || !color || color.match(/^ *$/) !== null){

    
            Helper.responseError(response, true, 401, "Please insert category name");
        
        }else{

            //data for response if success
            let data = {

                "id" : id,
                "category_name" : name,
                "category_color" : color,
                "category_updated_at" : timeNow,
                "category_updated_by" : user,
            }

            CategoryModel.updateData(res, data);
            
        }

    }


    export function deleteCategory(req, res){

        let id = req.params.id;
        let user = req.body.category_deleted_by;
        let timeNow = moment().format("YYYY-MM-DD hh:mm:ss");

        let data = {
            "id" : id,
            "category_deleted_by" : user,
            "category_deleted_at" : timeNow 
        }
        
        CategoryModel.deleteData(res, data);

    }

