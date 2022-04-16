import database from "../config/Database.js";
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize

//read
export const getAllData = database.define("categories", {

    "id" : {

        type : DataTypes.STRING,
        primaryKey: true,
        allowNull : false

    },
    "name" : {

        type : DataTypes.STRING

    },
    "created_at" : {

        type : DataTypes.DATE
    },
    "created_by" : {

        type : DataTypes.STRING
    },
    "updated_at" : {

        type : DataTypes.DATE
    },
    "updated_by" : {

        type : DataTypes.STRING
    },
    "deleted_at" : {

        type : DataTypes.DATE

    },
    "deleted_by" : {

        type : DataTypes.STRING

    }

},{
    
    timestamps: false,
    freezeTableName : true
});

export const getDataById = (response, statement) => {

    database.query(statement, (err, rows, field)=>{


        if(err){

            console.log(err);

            console.log("Failed get data category ....");

            return response.status(401).json(err);

        }
        
        // if data not available
        if(rows.length < 1){

            let data = {

                "success" : false,
                "status" : 401,
                "data" : {}
    
            }
    
            // console.log(data);
    
            return response.status(401).json(data);

        }else{

            // console.log(rows);
        
            let data = {
    
                "success" : true,
                "status" : response.statusCode,
                "data" : rows[0]
    
            }
    
            // console.log(data);
    
            return response.status(response.statusCode).json(data);

        }
       

    });

};

//create
export const createData = (response, statement, data) => {

    // console.log(statement); //this is query sql

    database.query(statement, (err, rows, field) => {


        if(err){

            console.log(err);

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
        
       
        if(err){

            console.log(err);

            let error = JSON.stringify(err);

            let errorToJson = JSON.parse(error);

            console.log("Failed update data category...");

            // console.log(errorToJson);

            let errorObj = {

                "error" : true,
                "status" : 401,
                "message" : errorToJson.sqlMessage 

            }

            return response.status(401).json(errorObj);

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
        

        if(err){

            console.log(err);

            let error = JSON.stringify(err);

            let errorToJson = JSON.parse(error);

            console.log("Failed delete data category...");

            // console.log(errorToJson);

            let errorObj = {

                "error" : true,
                "status" : 401,
                "message" : errorToJson.sqlMessage 

            }

            return response.status(401).json(errorObj);

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