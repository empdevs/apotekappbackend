import database from "../config/Database";
import "dotenv/config";

database.connect(function(error: Error){

    if(error){

        console.log(error);

    }else{

        let sql : string =  `create table roles (id VARCHAR(36), 
                                                role_number INT AUTO_INCREMENT UNIQUE,
                                                role_name VARCHAR(255),
                                                role_created_at DATETIME, 
                                                role_created_by VARCHAR(255), 
                                                role_updated_at DATETIME,
                                                role_updated_by VARCHAR(255), 
                                                role_deleted_at DATETIME, 
                                                role_deleted_by VARCHAR(255)
                                                )`;
        database.query(sql, function(error: Error, result: any){

            if(error){

                console.log("Failed create table role...", error);

            }else{

                console.log("Success create table role...");

            }

        });

    }

});