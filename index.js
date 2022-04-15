import express from "express";
import database from "./config/Database.js";
import CategoryRoutes from './routes/CategoryRoutes.js'; 

const app = express();
const port = process.env.PORT || 5000;

//check connection database
try{
    
    database.connect(()=>{

        console.log("Database connected...");

    });

}catch(error){

        console.log("Database not connected...", error);

}

//Route API
app.use('/api/category/',CategoryRoutes);


//server running
app.listen(port,()=>{

    console.log(`Server running at port ${port} `);

});
