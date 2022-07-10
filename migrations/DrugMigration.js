import database from "../config/Database.js";

database.connect(function(error){
    
    if(error){

        console.log(error);

    }else{

        let sql = `CREATE TABLE drugs ( 
            id VARCHAR(36), 
            category_id VARCHAR(36),
            drug_number int AUTO_INCREMENT UNIQUE,
            drug_name VARCHAR(255), 
            drug_stock INT(255),
            drug_price INT(255),
            drug_benefit VARCHAR(500),
            drug_picture VARCHAR(255),
            drug_created_at DATETIME, 
            drug_created_by VARCHAR(255), 
            drug_updated_at DATETIME,
            drug_updated_by VARCHAR(255), 
            drug_deleted_at DATETIME, 
            drug_deleted_by VARCHAR(255), 
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