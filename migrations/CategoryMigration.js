import database from "../config/Database.js";

//create table category
database.connect(function(error){

    console.log(error);

    if(error){

        console.log(error);

        

    }else{

        let sql = `CREATE TABLE categories ( 
            id VARCHAR(36), 
            category_number int NOT NULL AUTO_INCREMENT UNIQUE,
            category_name VARCHAR(255) NOT NULL UNIQUE, 
            category_created_at DATETIME, 
            category_created_by VARCHAR(255), 
            category_updated_at DATETIME,
            category_updated_by VARCHAR(255), 
            category_deleted_at DATETIME, 
            category_deleted_by VARCHAR(255), 
            PRIMARY KEY (id)
        )`;

        database.query(sql, function(error, result){

            if(error){

                console.log("Failed create table categories...", error);

            }else{

                console.log("Success create table categories...");
            }

        });

    }

});