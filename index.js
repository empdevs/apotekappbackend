import express from "express";
import database from "./config/Database.js";
import CategoryRoutes from './routes/CategoryRoutes.js'; 

const app = express();
const port = process.env.PORT || 5000;

//check connection database
try{
    
    database.authenticate();

    console.log("Database connected...");

}catch(error){

    console.log("Database not connected...", error);

}

// Parse JSON bodies for this app. Make sure you put
// `app.use(express.json())` **before** your route handlers!
app.use(express.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(express.urlencoded({extended: true}));

//Route API
app.use('/api/category/',CategoryRoutes);

//server running
app.listen(port,()=>{

    console.log(`Server running at port ${port} `);

});


export default app;