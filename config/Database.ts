import mysql, { Connection } from 'mysql';
import "dotenv/config";

const database : Connection = mysql.createConnection({

        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password: "",
        database: process.env.DB_NAME,
        port: Number(process.env.DB_PORT)

});



//create database
// database.connect(function(err){


//     database.query("CREATE DATABASE apotek", function(err, result){

//         try{

//             console.log("Database success created");

//         }catch{

//             console.log(`Database failed created ${err}`);

//         }

//     });


// });

export default database;