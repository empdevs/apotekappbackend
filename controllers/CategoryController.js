import moment from "moment";
import { v4 as uuidv4 } from 'uuid'; 
// import { getData, getDataById, createData, updateData, deleteData } from '../models/CategoryModel.js'; 
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
        let name = req.body.name;
        let createdBy = req.body.created_by;
        let updatedBy = req.body.updated_by;
        let timeNow = moment().format("YYYY-MM-DD hh:mm:ss");
    

        if(!name || name === "" || name.match(/^ *$/) !== null){

            Helper.responseError(res, true, 401, "Please insert category name");
            
        }else{

            let data = {

                "id" : id,
                "name" : name,
                "created_at" : timeNow,
                "created_by" : createdBy,
                "updated_at" : timeNow,
                "updated_by" : updatedBy,
    
            }
            //model create
            CategoryModel.createData(res, data);
        }


       

    }

    export function updateCategory(req, res){

        let id = req.params.id;
        let name = req.body.name;
        let user = req.body.updated_by;
        let timeNow = moment().format("YYYY-MM-DD hh:mm:ss");

        if(!name || name === "" || name.match(/^ *$/) !== null){

    
            Helper.responseError(response, true, 401, "Please insert category name");
        
        }else{

            //data for response if success
            let data = {

                "id" : id,
                "name" : name,
                "updated_at" : timeNow,
                "updated_by" : user,
            }

            CategoryModel.updateData(res, data);
            
        }

    }


    export function deleteCategory(req, res){

        let id = req.params.id;
        let user = req.body.deleted_by;
        let timeNow = moment().format("YYYY-MM-DD hh:mm:ss");

        let data = {
            "id" : id,
            "deleted_by" : user,
            "deleted_at" : timeNow 
        }
        
        CategoryModel.deleteData(res, data);

    }

