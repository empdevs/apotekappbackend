import database from "../config/Database";
import "dotenv/config";

database.connect(function(error: Error){

    if(error){

        console.log(error);

    }else{

        let sql : string =  `create table users (id VARCHAR(36), 
                                                user_number INT AUTO_INCREMENT UNIQUE,
                                                user_name VARCHAR(255) UNIQUE,
                                                user_email VARCHAR(255) UNIQUE,
                                                user_phone INT(25) UNIQUE,
                                                user_password VARCHAR(255),
                                                user_created_at DATETIME, 
                                                user_created_by VARCHAR(255), 
                                                user_updated_at DATETIME,
                                                user_updated_by VARCHAR(255), 
                                                user_deleted_at DATETIME, 
                                                user_deleted_by VARCHAR(255),
                                                PRIMARY KEY (id)
                                                )`;
        database.query(sql, function(error: Error, result: any){

            if(error){

                console.log("Failed create table user...", error);

            }else{

                console.log("Success create table user...");

            }

        });

    }

});