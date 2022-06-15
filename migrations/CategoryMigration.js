import database from "../config/Database.js";

//create table category
database.connect(function(error){

    // console.log(error);

    if(error){

        console.log(error);

        

    }else{

        let sql = `CREATE TABLE categories ( 
            id VARCHAR(36), 
            number int NOT NULL AUTO_INCREMENT UNIQUE,
            name VARCHAR(255) NOT NULL UNIQUE, 
            created_at DATETIME, 
            created_by VARCHAR(255), 
            updated_at DATETIME,
            updated_by VARCHAR(255), 
            deleted_at DATETIME, 
            deleted_by VARCHAR(255), 
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