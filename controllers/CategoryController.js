import { Categories } from "../models/CategoryModel.js";
import moment from "moment";
import { v4 as uuidv4 } from 'uuid'; 

export async function getAllCategories(req,res){

    try{

        let data = await Categories.findAll({

            where : {

                "deleted_by" : null,
                "deleted_at" : null

            }

        });

        let responseData = {
        
            "success" : true,
            "status" : res.statusCode,
            "data" : data

        }

        // console.log("Success get data...");

        return res.status(res.statusCode).json(responseData);

    }catch(error){

        console.log("Failed get data...");
        
        console.log(error);

        let responseData = {
        
            "success" : false,
            "status" : 401,
            "message" : "Failed get data",
            "data" : {}

        }

        return res.status(401).json(responseData);

    }

}

export async function getCategoryById(req,res){

    let id = req.params.id;

    try{

        let data = await Categories.findAll({

            where : {

                "id" : id,
                "deleted_by" : null,
                "deleted_at" : null

            }

        });

        // console.log(data);

        if(data.length < 1){

            let responseData = {
            
                "success" : false,
                "status" : 401,
                "data" : data
    
            }
    
            console.log("Failed get data...");
    
            return res.status(401).json(responseData);


        }else{

            let responseData = {
            
                "success" : true,
                "status" : res.statusCode,
                "data" : data
    
            }
    
            console.log("Success get data...");
    
            return res.status(res.statusCode).json(responseData);

        }


    }catch(error){

        console.log("Failed get data...");
        
        console.log(error);

        let responseData = {
        
            "success" : false,
            "status" : 401,
            "message" : "Failed get data",
            "data" : {}

        }

        return res.status(401).json(responseData);

    }

}

export async function createCategory(req,res){

    // data post
    let id = uuidv4();
    let name = req.body.name;
    let timeNow = moment().format("YYYY-MM-DD hh:mm:ss");
    let user = 'system'

    try{

        //data for response if success
        let data = {

            "id" : id,
            "name" : name,
            "created_at" : timeNow,
            "created_by" : user,
            "updated_at" : timeNow,
            "updated_by" : user,
            "deleted_at" : null,
            "deleted_by" : null,

        }

        await Categories.create(data);

        let responseData = {
            
            "success" : true,
            "status" : res.statusCode,
            "message" : "Success create data",
            "data" : data

        }

        // console.log("Success get data...");

        return res.status(res.statusCode).json(responseData);

    }catch(error){

        console.log(error);

        console.log("Failed create data category...");

        let errorStr = JSON.stringify(error);

        let errorToJson = JSON.parse(errorStr);

        // console.log(errorToJson);

        let errorObj = {

            "error" : true,
            "status" : 401,
            "message" : errorToJson.original.sqlMessage,

        }

        // console.log(errorObj);

        return res.status(401).json(errorObj);

    }

}

export async function updateCategory(req, res){

    let id = req.params.id;
    let name = req.body.name;
    let user = req.body.updated_by;
    let timeNow = moment().format("YYYY-MM-DD hh:mm:ss");


    try{

            //data for response if success
        let data = {

            "name" : name,
            "updated_at" : timeNow,
            "updated_by" : user,
        }

        // console.log(data);

        await Categories.update(data, {

            "where" : {

                "id" : id

            }

        });

        // console.log("Success udpate data category...");

        let responseData = {
            
            "success" : true,
            "status" : res.statusCode,
            "message" : "Success udpate data",
            "data" : data

        }

        // console.log(responseData);

        return res.status(res.statusCode).json(responseData);


    }catch(error){

        console.log("Failed udpate data category...");

        let errorStr = JSON.stringify(error);

        let errorToJson = JSON.parse(errorStr);

        // console.log(errorToJson);

        let errorObj = {

            "error" : true,
            "status" : 401,
            "message" : errorToJson.original.sqlMessage,

        }

        // console.log(errorObj);

        return res.status(401).json(errorObj);

    }

}


export async function deleteCategory(req, res){

    let id = req.params.id;
    let user = req.body.deleted_by;
    let timeNow = moment().format("YYYY-MM-DD hh:mm:ss");

    try{

        let data = {

            "deleted_at" : timeNow,
            "deleted_by" : user

        }

        // console.log(data);

        await Categories.update(data, {

            "where" : {

                "id" : id

            }

        });
        
        // console.log("Success delete data category...");

        let responseData = {

            "success": true,
            "status": res.statusCode,
            "message": "Success delete data...",
        }

        return res.status(res.statusCode).json(responseData);

    }catch(error){

        console.log(error);

        console.log("Failed delete data category...");

        let errorStr = JSON.stringify(error);

        let errorToJson = JSON.parse(errorStr);

        // console.log(errorToJson);

        let errorObj = {

            "error" : true,
            "status" : 401,
            "message" : errorToJson.original.sqlMessage

        }

        // console.log(errorObj);

        return res.status(401).json(errorObj);

    }


}