import { Request, Response } from "express";
import database from "../config/Database";
import Helper from "../utils/Helper";
import ResponseType from "../utils/ResponseDataModel";
import { ICreateRole, IDeleteRole, IUpdateRole } from "../utils/Types";

const RoleModel : any = {};

RoleModel.getData = (response: Response) =>{

    let sql : string = `SELECT * FROM roles WHERE role_deleted_at IS NULL AND role_deleted_by IS NULL`;

    database.query(sql, function(error: Error, result: any, field: any){

        if(error){

            console.log(error);

            console.log("Failed get data role...");

            Helper.responseError(response, true, 401, "Failed get data role");

        }else{

            // console.log(result);

            Helper.responseData(response, true, response.statusCode, "Success get data", result);

        }

    });


}
RoleModel.createData = (response: Response, data: ICreateRole) =>{

    let sql : string = `INSERT INTO roles VALUES('${data.id}','${''}','${data.role_name}','${data.role_created_at}','${data.role_created_by}','${data.role_updated_at}','${data.role_updated_by}',${null},${null})`;

    database.query( sql, function(error: Error, result: any, field: any){

        if(error){

            let errorQuery = JSON.stringify(error);

            let errorToJson = JSON.parse(errorQuery);

            console.log("Failed create data role...");

            Helper.responseError(response, true, 401, errorToJson.sqlMessage);

        }else{

            let dataModel = ResponseType.createRole(data);

            Helper.responseData(response, true, response.statusCode, "Success insert data", dataModel);
        }

    });
    
}
RoleModel.getDataById = (response: Response, id: string) =>{

    let sql : string = `SELECT * FROM roles WHERE id='${id}' AND role_deleted_at IS NULL AND role_deleted_by IS NULL`;

    database.query(sql, function(error: Error, result: any, field: any){

        if(error){

            console.log(error);

            console.log("Failed get data category ....");

            Helper.responseError(response, true, 401, error)

        }else{
            
            // if data not available
            if(result.length < 1){
        
                Helper.responseData(response, true, 201, "Data not available", {});

            }else{

                Helper.responseData(response, true, 201, "Success get data by id", result[0]);

            }

        }
    

    });
    
}
RoleModel.updateData = (response: Response, data: IUpdateRole) =>{

    let sql : string = `UPDATE roles SET role_name='${data.role_name}', 
                                         role_updated_at='${data.role_updated_at}', 
                                         role_updated_by='${data.role_updated_by}' 
                                         WHERE id='${data.id}'
                                         `;

    database.query( sql, function(error: Error, result: any, field: any){

        if(error){

            let errorQuery = JSON.stringify(error);

            let errorToJson = JSON.parse(errorQuery);

            console.log("Failed update data role...");

            Helper.responseError(response, true, 401, errorToJson.sqlMessage);

        }else{

            let dataModel = ResponseType.updateRole(data);

            Helper.responseData(response, true, response.statusCode, "Success update data", dataModel);
        }

    });


}
RoleModel.deleteData = (response: Response, data: IDeleteRole) =>{

    let sql : string = `UPDATE roles SET role_deleted_at='${data.role_deleted_at}', role_deleted_by='${data.role_deleted_by}' WHERE id = '${data.id}' `;

    database.query(sql, function(error: Response, result: any, field: any){
        

        if(error){

            console.log(error);

            let errorQuery = JSON.stringify(error);

            let errorToJson = JSON.parse(errorQuery);

            console.log("Failed delete data role...");

            Helper.responseError(response, true, 401, errorToJson.sqlMessage);
    

        }else{

            // console.log(response);

            console.log("Success delete data role...");

            Helper.responseData(response, true, response.statusCode, "Success delete data", {});

        }

    });

}

export default RoleModel;