import database from "../config/Database";
import "dotenv/config";

database.connect(function(error: Error){

    if(error){

        console.log(error);

    }else{

        let sql : string =  `create table users_roles ( user_id VARCHAR(36),
                                                        role_id VARCHAR(36),
                                                        user_role_created_at DATETIME, 
                                                        user_role_created_by VARCHAR(255), 
                                                        user_role_updated_at DATETIME,
                                                        user_role_updated_by VARCHAR(255), 
                                                        user_role_deleted_at DATETIME, 
                                                        user_role_deleted_by VARCHAR(255), 
                                                        FOREIGN KEY (user_id) REFERENCES users(id),
                                                        FOREIGN KEY (role_id) REFERENCES roles(id)
                                                      )`;
        database.query(sql, function(error: Error, result: any){

            if(error){

                console.log("Failed create table pivot user & role...", error);

            }else{

                console.log("Success create table user & role...");

            }

        });

    }

});