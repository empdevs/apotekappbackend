import database from "../config/Database.js";

//create table category
database.connect(function(error){

    try{

        let sql = `CREATE TABLE categories ( 
                        id VARCHAR(36), 
                        name VARCHAR(255), 
                        created_at DATETIME DEFAULT CURRENT_TIMESTAMP , 
                        created_by VARCHAR(255), 
                        updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
                        updated_by VARCHAR(255), 
                        deleted_at DATETIME DEFAULT CURRENT_TIMESTAMP, 
                        deleted_by VARCHAR(255), 
                        PRIMARY KEY (id)
                    )`;

        database.query(sql, function(error, result){

            try{

                console.log("Success create table categories...");

            }catch{

                console.log("Failed create table categories...", error);

            }

        });

    }catch{

        console.log(error);

    }

});