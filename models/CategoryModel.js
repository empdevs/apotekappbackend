import database from "../config/Database.js";
// import { responseData } from "../utils/ResponseHandlers.js";

//read
export const getData = (response, statement) => {

    database.query(statement, (err, rows, field)=>{

        // console.log(err);

        if(err){

            return console.log("Failed get data category...");

        }

        let data = {
            "success": true,
            "status": 200,
            "data": rows,
        };

        return response.status(200).json(data);

        // responseData(response, 200, rows);

    });

};

//create
export const createData = (response, statement, data) => {

    // console.log(statement); //this is query sql

    database.query(statement, (err, rows, field) => {


        if(err){

            // console.log(JSON.stringify(err));

            let error = JSON.stringify(err);

            let errorToJson = JSON.parse(error);
            
            console.log("Failed create data category...");

            // console.log(errorToJson);

            let errorObj = {

                "error" : true,
                "status" : 400,
                "message" : errorToJson.sqlMessage 

            }

            return response.status(400).json(errorObj);

        }

            // console.log(response);

            console.log("Success create data category...");

            let dataResponse = {

                "success": true,
                "status": response.statusCode,
                "message": "Success insert data",
                "data": data 

            }

            return response.status(response.statusCode).json(dataResponse);

    });

}; 

//update
export const updateData = (response, statement, data)=>{


    database.query(statement, (err, rows, field)=>{
        
        // console.log(err);

        if(err){

            let error = JSON.stringify(err);

            let errorToJson = JSON.parse(error);

            console.log("Failed update data category...");

            // console.log(errorToJson);

            let errorObj = {

                "error" : true,
                "status" : 400,
                "message" : errorToJson.sqlMessage 

            }

            return response.status(400).json(errorObj);

        }

         // console.log(response);

         console.log("Success update data category...");

         let dataResponse = {

             "success": true,
             "status": response.statusCode,
             "message": "Success udpate data",
             "data": data 

         }

         return response.status(response.statusCode).json(dataResponse);

    });

}

// delete
export const deleteData = (response, statement)=>{


    database.query(statement, (err, rows, field)=>{
        
        // console.log(err);

        if(err){

            let error = JSON.stringify(err);

            let errorToJson = JSON.parse(error);

            console.log("Failed delete data category...");

            // console.log(errorToJson);

            let errorObj = {

                "error" : true,
                "status" : 400,
                "message" : errorToJson.sqlMessage 

            }

            return response.status(400).json(errorObj);

        }

         // console.log(response);

         console.log("Success delete data category...");

         let dataResponse = {

             "success": true,
             "status": response.statusCode,
             "message": "Success delete data",
         }

         return response.status(response.statusCode).json(dataResponse);

    });

}