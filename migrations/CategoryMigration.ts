import database from "../config/Database";

//create table category
database.connect(function(error: Error){

    console.log(error);

    if(error){

        console.log(error);

        

    }else{

        let sql : string = `CREATE TABLE categories ( 
            id VARCHAR(36), 
            category_number int NOT NULL AUTO_INCREMENT UNIQUE,
            category_name VARCHAR(255),
            category_color VARCHAR(255), 
            category_created_at DATETIME, 
            category_created_by VARCHAR(255), 
            category_updated_at DATETIME,
            category_updated_by VARCHAR(255), 
            category_deleted_at DATETIME, 
            category_deleted_by VARCHAR(255), 
            PRIMARY KEY (id)
        )`;

        database.query(sql, function(error: Error, result: any){

            if(error){

                console.log("Failed create table categories...", error);

            }else{

                console.log("Success create table categories...");
            }

        });

    }

});