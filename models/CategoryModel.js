import database from "../config/Database.js";
import { responseData } from "../utils/ResponseHandlers.js";

export const getAllData = (response, statement) => {

    database.query(statement, (err, rows, field)=>{

        if(err){

            return console.log("Failed get data category...");

        }

        let data = {
            success: true,
            status: 200,
            data: rows,
        };

        response.status(200).json(data);

        response.end();

        // responseData(response, 200, rows);

    });

};

export const createData = (response, statement, data) => {

    database.query(statement, data, (err, rows, field) => {

        if(err){

            return console.log("Failed create data category...");

        }

            console.log("Success create data category...");

    });

}; 