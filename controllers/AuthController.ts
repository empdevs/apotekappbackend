import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import database from "../config/Database";
import Helper from "../utils/Helper";

export function login(req: Request,res: Response){

    const jwtKey = process.env.SECRET_KEY!;
    const jwtExpirySeconds = 300;
    // console.log(req);

    const { username, password } = req.body; 

    let sql : string = `SELECT * FROM users WHERE user_name='${username}' AND user_password='${password}'`;

    database.query(sql , function(error: Error, result: any, field: any){

        if(error){

            console.log(error);
            console.log("Failed get data users...");
            Helper.responseError(res, true, 401, "Failed get data user");

        }else{
            const token = jwt.sign({ username }, jwtKey, {
                algorithm: "HS256",
                expiresIn: jwtExpirySeconds,
            });

            res.cookie('token', token, { maxAge: jwtExpirySeconds * 1000 })
            Helper.responseData(res, true, 201, "login successfully", {token : token});
            res.end();
        }

    });

    


   

}


export function refreshToken(req: Request, res: Response){
    
}


