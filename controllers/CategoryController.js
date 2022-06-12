import moment from "moment";
import { v4 as uuidv4 } from 'uuid'; 
import { getData, getDataById, createData, updateData, deleteData } from '../models/CategoryModel.js'; 


    export function getAllCategories(req,res){

        let sql = `SELECT * FROM categories WHERE deleted_at IS NULL AND deleted_by IS NULL ORDER BY NUMBER ASC`;

        return getData(res, sql);

    }

    export function getCategoryById(req,res){

        let id = req.params.id;

        let sql = `SELECT * FROM categories WHERE id='${id}' AND deleted_at IS NULL AND deleted_by IS NULL`;

        return getDataById(res, sql);

    }

    export function createCategory(req,res){

        // data post
        let id = uuidv4();
        let name = req.body.name;
        let createdBy = req.body.created_by;
        let updatedBy = req.body.updated_by;
        let timeNow = moment().format("YYYY-MM-DD hh:mm:ss");
    

        if(!name || name === "" || name.match(/^ *$/) !== null){

            let errorObj = {

                "error" : true,
                "status" : 401,
                "message" : "Please insert category name",
    
            }
    
            // console.log(errorObj);
    
            return res.status(errorObj.status).json(errorObj);

        }else{


            let sql = `INSERT INTO categories VALUES ('${id}','${''}','${name}','${timeNow}', '${createdBy}', '${timeNow}', '${updatedBy}', ${null}, ${null})`;
            //data for response if success
            let data = {
    
                "id" : id,
                "name" : name,
                "created_at" : timeNow,
                "created_by" : createdBy,
                "updated_at" : timeNow,
                "updated_by" : updatedBy,
                "deleted_at" : null,
                "deleted_by" : null,
    
            }

            //model create
            return createData(res, sql, data);
        }


       

    }

    export function updateCategory(req, res){

        let id = req.params.id;
        let name = req.body.name;
        let user = req.body.updated_by;
        let timeNow = moment().format("YYYY-MM-DD hh:mm:ss");

        if(!name || name === "" || name.match(/^ *$/) !== null){

            let errorObj = {
    
                "error" : true,
                "status" : 401,
                "message" : "Please insert category name",
    
            }
    
            // console.log(errorObj);
    
            return res.status(errorObj.status).json(errorObj);
        
        }else{

            let sql = `UPDATE categories SET name='${name}',updated_at='${timeNow}', updated_by='${user}' WHERE id = '${id}' `;

            //data for response if success
            let data = {

                "id" : id,
                "name" : name,
                "updated_at" : timeNow,
                "updated_by" : user,
            }


            return updateData(res, sql, data);
        }

    }


    export function deleteCategory(req, res){

        let id = req.params.id;
        let user = req.body.deleted_by;
        let timeNow = moment().format("YYYY-MM-DD hh:mm:ss");

        let sql = `UPDATE categories SET deleted_at='${timeNow}', deleted_by='${user}' WHERE id = '${id}' `;
        
        return deleteData(res, sql);

    }

