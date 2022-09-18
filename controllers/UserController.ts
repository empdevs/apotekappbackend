import { Request, Response } from "express";
import UserModel from "../models/UserModel";
import { ICreateUser } from "../utils/Types";
import { v4 as uuidv4 } from 'uuid'; 
import moment from "moment";

export function createUser(req:Request, res:Response){  

    let id : string = uuidv4();
    let name : string = req.body.user_name;
    let email : string = req.body.user_email;
    let phone : number = req.body.user_phone;
    let password : string = req.body.user_password;
    let createdBy : string = req.body.user_created_by; 
    let updatedBy : string = req.body.user_updated_by; 
    let roles : any[] = req.body.user_roles;
    let timeNow : string = moment().format("YYYY-MM-DD hh:mm:ss");

    let data : ICreateUser = {
        id: id,
        user_name: name,
        user_email: email,
        user_phone: phone,
        user_password: password,
        user_created_by: createdBy,
        user_created_at:timeNow,
        user_updated_by: updatedBy,
        user_updated_at:timeNow,
        user_roles:roles
    }

    UserModel.createData(res,data);

}

export function getAllUsers(req: Request, res: Response){

    UserModel.getData(res);

}