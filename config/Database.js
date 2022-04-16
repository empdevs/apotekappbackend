import { Sequelize }  from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const database = new Sequelize(process.env.DB_NAME, process.env.DB_USER, '', {

        "host" : process.env.DB_HOST,
        "dialect" : 'mysql'

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