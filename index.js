import express from "express";
import database from "./config/Database.js";
import CategoryRoutes from './routes/CategoryRoutes.js'; 
import DrugRoutes from './routes/DrugRoutes.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 5000;

//check connection database
database.connect(function(error){

    if(error){

        console.log("Database not connected...", error);
        
    }else{

        console.log("Database connected...");
    }

});

// CORS is a mechanism to tell the browser, whether a request that is 
// dispatched from another web application domain or another origin, to our web application is allowed or not.
app.use(cors());

// Parse JSON bodies for this app. Make sure you put
// `app.use(express.json())` **before** your route handlers!
app.use(express.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(express.urlencoded({extended: true}));

//Route API
app.use('/api/category/',CategoryRoutes);
app.use('/api/drug/',DrugRoutes);

//server running
app.listen(port,()=>{

    console.log(`Server running at port ${port} `);

});
