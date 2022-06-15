import database from "../config/Database.js";

database.connect(function(error){
    
    if(error){

        console.log(error);

    }else{

        let sql = `CREATE TABLE drugs ( 
            id VARCHAR(36), 
            category_id VARCHAR(36),
            number int AUTO_INCREMENT UNIQUE,
            name VARCHAR(255) UNIQUE, 
            stock VARCHAR(255),
            price VARCHAR(255),
            benefit VARCHAR(500),
            picture VARCHAR(255),
            created_at DATETIME, 
            created_by VARCHAR(255), 
            updated_at DATETIME,
            updated_by VARCHAR(255), 
            deleted_at DATETIME, 
            deleted_by VARCHAR(255), 
            PRIMARY KEY (id),
            FOREIGN KEY (category_id) REFERENCES Categories(id)
            
        )`;

        database.query(sql, function(error, result){

            if(error){

                console.log("Failed create table drugs...", error);

            }else{

                console.log("Success create table drugs...");
            }

        });


    }

});