import database from "../config/Database.js";
import Helper from "../utils/Helper.js";
import ResponseDataModel from "../utils/ResponseDataModel.js";

const CategoryModel = {};

    CategoryModel.getData = (response) => {


        let sql = `SELECT * FROM categories WHERE category_deleted_at IS NULL AND category_deleted_by IS NULL ORDER BY category_number ASC`;

        database.query(sql, function(error, result, field){

            if(error){

                console.log(error);

                console.log("Failed get data category...");

                Helper.responseError(response, true, 401, "Failed get data category");

            }else{

                // console.log(result);

                Helper.responseData(response, true, response.statusCode, "Success get data", result);

            }

        });

    };

    CategoryModel.getDataById = (response, id) => {

        let sql = `SELECT * FROM categories WHERE id='${id}' AND category_deleted_at IS NULL AND category_deleted_by IS NULL`;

        database.query(sql, function(error, result, field){


            if(error){

                console.log(error);

                console.log("Failed get data category ....");

                Helper.responseError(response, true, 401, error)

            }else{
                
                // if data not available
                if(result.length < 1){
            
                    Helper.responseData(response, true, 201, "Data not available", {});

                }else{

                    Helper.responseData(response, true, 201, "Success get data by id", result[0]);

                }

            }
        

        });

    };

    //create
    CategoryModel.createData = (response,data) => {

        let sql = `INSERT INTO categories VALUES ('${data.id}','${''}','${data.category_name}','${data.category_color}','${data.category_created_at}', '${data.category_created_by}', '${data.category_updated_at}', '${data.category_updated_by}', ${null}, ${null})`;

        database.query(sql, function(error, result, field){


            if(error){

                console.log(error);

                let errorQuery = JSON.stringify(error);

                let errorToJson = JSON.parse(errorQuery);
                
                console.log("Failed create data category...");

                Helper.responseError(response, true, 401, errorToJson.sqlMessage);
          

            }else{

                // console.log(response);

                console.log("Success create data category...");
    
                let dataModel = ResponseDataModel.createCategory(data);

                Helper.responseData(response, true, response.statusCode, "Success insert data", dataModel);

            }

        });

    }; 

    //update
    CategoryModel.updateData = (response, data) => {

        let sql = `UPDATE categories SET category_name='${data.category_name}',category_color='${data.category_color}',category_updated_at='${data.category_updated_at}', category_updated_by='${data.category_updated_by}' WHERE id = '${data.id}' `;

        database.query(sql, function(error, result, field){
            
        
            if(error){

                console.log(error);

                let errorQuery = JSON.stringify(error);

                let errorToJson = JSON.parse(errorQuery);

                console.log("Failed update data category...");

                Helper.responseError(response, true, 401, errorToJson.sqlMessage);

            }else{

                // console.log(response);

                console.log("Success update data category...");

                Helper.responseData(response, true, response.statusCode, "Success update data", {});
            }

        });

    }

    // delete
    CategoryModel.deleteData = (response, data) => {

        let sql = `UPDATE categories SET category_deleted_at='${data.category_deleted_at}', category_deleted_by='${data.category_deleted_by}' WHERE id = '${data.id}' `;

        database.query(sql, function(error, result, field){
            

            if(error){

                console.log(error);

                let errorQuery = JSON.stringify(error);

                let errorToJson = JSON.parse(errorQuery);

                console.log("Failed delete data category...");

                Helper.responseError(response, true, 401, errorToJson.sqlMessage);
        

            }else{

                // console.log(response);

                console.log("Success delete data category...");

                Helper.responseData(response, true, response.statusCode, "Success delete data", {});

            }

        });

    }



export default CategoryModel