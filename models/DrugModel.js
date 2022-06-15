import database from "../config/Database.js";

export function createData(response, statement, data){

    database.query(statement, (err ,rows ,field)=>{

        if(err){

            let error = JSON.stringify(err);

            let errorToJson = JSON.parse(error);
            
            console.log("Failed create data category...");

            // console.log(errorToJson);

            let errorObj = {

                "error" : true,
                "status" : 401,
                "message" : errorToJson.sqlMessage 

            }

            return response.status(400).json(errorObj);


        }else{

              // console.log(response);

              console.log("Success create data drug...");

              let dataResponse = {

                  "success": true,
                  "status": response.statusCode,
                  "message": "Success insert data",
                  "data": data 

              }

              return response.status(response.statusCode).json(dataResponse);

        }

    });

}