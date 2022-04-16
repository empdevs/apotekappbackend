import dotenv from 'dotenv';
import mysql from 'mysql';

dotenv.config();

const database = mysql.createConnection({

        host : process.env.DB_HOST,
        user : process.env.DB_USER,
        password: "",
        database: process.env.DB_NAME,

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