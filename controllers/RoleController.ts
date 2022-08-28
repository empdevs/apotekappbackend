import { Request, Response } from "express";
import RoleModel from "../models/RoleModel";
import { v4 as uuidv4 } from 'uuid';
import Helper from "../utils/Helper";
import { ICreateRole, IDeleteRole, IUpdateRole } from "../utils/Types";
import moment from "moment";

export function getAllRoles(req: Request, res: Response){

    RoleModel.getData(res);

}

export function createRole(req: Request, res: Response){

    let id : string = uuidv4();
    let name : string = req.body.role_name;
    let createdBy : string = req.body.role_created_by;
    let updatedBy : string = req.body.role_updated_by;
    let timeNow : string = moment().format("YYYY-MM-DD hh:mm:ss");

    if((!name || name.match(/^ *$/) !== null)){

        Helper.responseError(res, true, 401, "Please fill in the fields correctly !");

    }else{

        let data : ICreateRole = {

            "id" : id,
            "role_name" : name,
            "role_created_at" : timeNow,
            "role_created_by" : createdBy,
            "role_updated_at" : timeNow,
            "role_updated_by" : updatedBy,

        }

        RoleModel.createData(res, data);

    }


}
export function updatedRole(req: Request, res: Response){

    let id : string = req.params.id;
    let name : string = req.body.role_name;
    let updatedBy : string = req.body.role_updated_by;
    let timeNow : string = moment().format("YYYY-MM-DD hh:mm:ss");

    if((!name || name.match(/^ *$/) !== null)){

        Helper.responseError(res, true, 401, "Please fill in the fields correctly !");

    }else{

        let data : IUpdateRole = {

            "id" : id,
            "role_name" : name,
            "role_updated_at" : timeNow,
            "role_updated_by" : updatedBy,

        }

        RoleModel.updateData(res, data);

    }


}
export function getRoleById(req: Request, res: Response){

    let id : string = req.params.id;

    RoleModel.getDataById(res,id);

}
export function deleteRole(req: Request, res: Response){

    let id : string = req.params.id;
    let deletedBy : string = req.body.role_deleted_by;
    let timeNow : string = moment().format("YYYY-MM-DD hh:mm:ss");

    let data : IDeleteRole = {
        "id" : id,
        "role_deleted_by" : deletedBy,
        "role_deleted_at" : timeNow 
    }
    
    RoleModel.deleteData(res, data);

}
