import { Response } from "express";
import database from "../config/Database";
import Helper from "../utils/Helper";
import { ICreateUser } from "../utils/Types";

const UserModel : any = {};

UserModel.getData = (response: Response) =>{

    let sql : string = `SELECT * FROM users INNER JOIN users_roles 
                        ON users_roles.user_id = users.id INNER JOIN 
                        roles ON users_roles.role_id = roles.id 
                        WHERE users.user_deleted_at IS NULL AND users.user_deleted_by IS NULL`;

    database.query(sql, function(error: Error, result: any, field: any){

        if(error){
            console.log(error);
            console.log("Failed get data user...");
            Helper.responseError(response, true, 401, "Failed get data user");
        }else{
            let arrUserId : any[] = [];
            let arrUsers : any[] = [];

            //check id user in array
            result.forEach((item:any) => !!!arrUserId.includes(item.user_id) ? arrUserId.push(item.user_id) : '');

            //looping user id in array on each
            arrUserId.forEach((item)=>{
                let data : any;

                //filter user where id user
                let users = result.filter((r:any) => r.user_id == item);

                //looping user
                users.forEach((u:any) => {

                    //check user if already in array
                    let isUserInside = arrUsers.find((au:any) => au.id == u.user_id);

                    //if user there
                    if(isUserInside){
                        data = {
                            id: isUserInside.id,
                            user_name: isUserInside.user_name,
                            user_number:isUserInside.user_number,
                            user_email:isUserInside.user_email,
                            user_phone:isUserInside.user_phone,
                            user_created_at:isUserInside.user_created_at,
                            user_created_by:isUserInside.user_created_by,
                            user_updated_at:isUserInside.user_updated_at,
                            user_updated_by:isUserInside.user_updated_by,
                            user_roles : [...isUserInside.user_roles, {role_id : u.role_id, role_name: u.role_name}]
                        }
                        arrUsers = arrUsers.map((au:any) => au.id == isUserInside.id ? data : au);
                    }else{
                        data = {
                            id: u.user_id,
                            user_name: u.user_name,
                            user_number:u.user_number,
                            user_email:u.user_email,
                            user_phone:u.user_phone,
                            user_created_at:u.user_created_at,
                            user_created_by:u.user_created_by,
                            user_updated_at:u.user_updated_at,
                            user_updated_by:u.user_updated_by,
                            user_roles : [{role_id : u.role_id, role_name: u.role_name}]
                        }
                        arrUsers.push(data);
                    }
                 
                });
                
            }); 

            Helper.responseData(response, true, response.statusCode, "Success get data", arrUsers);

        }

    });


}

UserModel.createData = (response: Response, data:ICreateUser) =>{   

            // insert user
            let sqlInsertUser : string = `INSERT INTO users VALUES('${data.id}','','${data.user_name}','${data.user_email}',${data.user_phone},'${data.user_password}','${data.user_created_at}','${data.user_created_by}','${data.user_updated_at}','${data.user_updated_by}',${null},${null})`;

            database.query(sqlInsertUser, function(error: any, result:any, field: any){
           
                if(result){
                    database.query(sqlInsertUser,function(error: Error, result:any, field: any){
                        let roles :any[] = data.user_roles;

                        try{
                            roles.map((item:string) => {
                                // insert in to pivot table
                                let sqlInsertUserRole : string = `INSERT INTO users_roles VALUES('${data.id}','${item}','${data.user_created_at}','${data.user_created_by}','${data.user_updated_at}','${data.user_updated_by}',${null},${null})`;
                                database.query(sqlInsertUserRole, function(error:Error, result:any, field: any){
                                    console.log(error);
                                });
                            });
                            return Helper.responseData(response, true, 201, "Success create user", {});
                        }catch(error){
                            console.log(error);
                            return Helper.responseError(response, true, 401, error);
                        }
                    });
                }else{
                    return Helper.responseError(response, true, 401, error.sqlMessage);
                }
            });

}

export default UserModel;