import database from "../config/Database.js";
import Helper from "../utils/Helper.js";
import ResponseDataModel from "../utils/ResponseDataModel.js";

const CategoryModel = {}

    CategoryModel.getData = (response) => {

        let sql = `SELECT * FROM categories WHERE deleted_at IS NULL AND deleted_by IS NULL ORDER BY NUMBER ASC`;

        database.query(sql, (err, rows, field)=>{

            if(err){

                console.log(err);

                console.log("Failed get data category...");

                Helper.responseError(response, true, 401, "Failed get data category");

            }else{

                Helper.responseData(response, true, response.statusCode, "Success get data", rows);

            }

        });

    };

    CategoryModel.getDataById = (response, id) => {

        let sql = `SELECT * FROM categories WHERE id='${id}' AND deleted_at IS NULL AND deleted_by IS NULL`;

        database.query(sql, (err, rows, field)=>{


            if(err){

                console.log(err);

                console.log("Failed get data category ....");

                Helper.responseError(response, true, 401, err)

            }else{
                
                // if data not available
                if(rows.length < 1){
            
                    Helper.responseData(response, true, 201, "Data not available", {});

                }else{

                    Helper.responseData(response, true, 201, "Success get data by id", rows[0]);

                }

            }
        

        });

    };

    //create
    CategoryModel.createData = (response,data) => {

        let sql = `INSERT INTO categories VALUES ('${data.id}','${''}','${data.name}','${data.created_at}', '${data.created_by}', '${data.updated_at}', '${data.updated_by}', ${null}, ${null})`;

        database.query(sql, (err, rows, field) => {


            if(err){

                console.log(err);

                let error = JSON.stringify(err);

                let errorToJson = JSON.parse(error);
                
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

        let sql = `UPDATE categories SET name='${data.name}',updated_at='${data.updated_at}', updated_by='${data.updated_by}' WHERE id = '${data.id}' `;

        database.query(sql, (err, rows, field)=>{
            
        
            if(err){

                console.log(err);

                let error = JSON.stringify(err);

                let errorToJson = JSON.parse(error);

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

        let sql = `UPDATE categories SET deleted_at='${data.deleted_at}', deleted_by='${data.deleted_by}' WHERE id = '${data.id}' `;

        database.query(sql, (err, rows, field)=>{
            

            if(err){

                console.log(err);

                let error = JSON.stringify(err);

                let errorToJson = JSON.parse(error);

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