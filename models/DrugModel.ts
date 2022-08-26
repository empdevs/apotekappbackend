import { Response } from "express";
import database from "../config/Database";
import Helper from "../utils/Helper";
import ResponseType from "../utils/ResponseDataModel";
import { ICreateDrug, IDeleteDrug, IDeleteImage, IUpdateDrug, IUploadImageDrug } from "../utils/Types";

const DrugModel : any = {};

DrugModel.getData = (response: Response) => {

    let sql : string = `SELECT drugs.id, 
                      drugs.category_id, 
                      categories.category_name,
                      categories.category_color, 
                      drugs.drug_number, 
                      drugs.drug_name, 
                      drugs.drug_stock, 
                      drugs.drug_price, 
                      drugs.drug_benefit, 
                      drugs.drug_picture, 
                      drugs.drug_created_at, 
                      drugs.drug_created_by, 
                      drugs.drug_updated_at, 
                      drugs.drug_updated_by 
                      FROM drugs INNER JOIN categories ON drugs.category_id=categories.id
                      WHERE drug_deleted_at IS NULL AND drug_deleted_by IS NULL ORDER BY drug_number ASC`;

    database.query(sql , function(error: Error, result: any, field: any){

        if(error){
  
            console.log(error);

            console.log("Failed get data drugs...");

            Helper.responseError(response, true, 401, "Failed get data drugs");

        }else{

            console.log(result);

            Helper.responseData(response, true, 201, "Success get data drugs", result);
        }

    });
}

DrugModel.createData = (response: Response, data: ICreateDrug) => {

    let sql : string = `INSERT INTO drugs VALUES('${data.id}','${data.category_id}','${''}','${data.drug_name}','${data.drug_stock}','${data.drug_price}','${data.drug_benefit}','${""}','${data.drug_created_at}','${data.drug_created_by}','${data.drug_updated_at}','${data.drug_updated_by}',${null},${null})`;

    database.query( sql, function(error: Error, result: any, field: any){

        if(error){

            let errorQuery = JSON.stringify(error);

            let errorToJson = JSON.parse(errorQuery);

            console.log("Failed create data drug...");

            Helper.responseError(response, true, 401, errorToJson.sqlMessage);

        }else{

            let dataModel = ResponseType.createDrug(data);

            Helper.responseData(response, true, response.statusCode, "Success insert data", dataModel);
        }

    });
    

}

DrugModel.updateData = (response: Response, data: IUpdateDrug) =>{

    let sql : string = `UPDATE drugs SET category_id='${data.category_id}', 
                                drug_name='${data.drug_name}', 
                                drug_stock='${data.drug_stock}', 
                                drug_price='${data.drug_price}', 
                                drug_benefit='${data.drug_benefit}', 
                                drug_picture='${data.drug_picture}',
                                drug_updated_at='${data.drug_updated_at}',
                                drug_updated_by='${data.drug_updated_by}'
                                WHERE id = '${data.id}'`;

        database.query(sql, function(error: Error, result: any, field: any){

            if(error){

                let errorQuery = JSON.stringify(error);

                let errorToJson = JSON.parse(errorQuery);
    
                console.log("Failed update data drug...");
    
                Helper.responseError(response, true, 401, errorToJson.sqlMessage);

            }else{

                console.log("Success update data");
                
                let dataModel = ResponseType.updateDrug(data);

                Helper.responseData(response, true, 201, "Success update data", dataModel);

            }

        });


}

DrugModel.uploadImage = (response: Response, data: IUploadImageDrug) => {

    let sql : string = `UPDATE drugs SET drug_picture='${data.drug_picture}',
                                drug_updated_at='${data.drug_updated_at}',
                                drug_updated_by='${data.drug_updated_by}' 
                                WHERE id = '${data.id}'`;

                database.query(sql, function(error: Error, result: string, field: string){

                    if(error){

                        console.log(error);

                        let errorQuery = JSON.stringify(error);
        
                        let errorToJson = JSON.parse(errorQuery);
        
                        console.log("Failed upload image drugs...");
        
                        Helper.responseError(response, true, 401, errorToJson.sqlMessage);

                    }else{

                        console.log("Success upload image drugs...");

                        Helper.responseData(response, true, 201, "Success upload image drugs", {});
                    }

                });

}

DrugModel.deleteImage = (response: Response, data: IDeleteImage) => {

    let sql : string = `UPDATE drugs SET drug_picture='${data.drug_picture}',
                                drug_updated_at='${data.drug_updated_at}',
                                drug_updated_by='${data.drug_updated_by}' 
                                WHERE id = '${data.id}'`;

                database.query(sql, function(error: Error, result: any, field: any){

                    if(error){

                        console.log(error);

                        let errorQuery = JSON.stringify(error);
        
                        let errorToJson = JSON.parse(errorQuery);
        
                        console.log("Failed delete image drugs...");
        
                        Helper.responseError(response, true, 401, errorToJson.sqlMessage);

                    }else{

                        console.log("Success delete image drugs...");

                        Helper.responseData(response, true, 201, "Success delete image drugs", {});
                    }

                });

}

DrugModel.deleteData = (response: Response, data: IDeleteDrug) => {

    let sql = `UPDATE drugs SET drug_picture='${data.drug_picture}',
                                drug_deleted_at='${data.drug_deleted_at}',
                                drug_deleted_by='${data.drug_deleted_by}' 
                                WHERE id = '${data.id}'`;

                database.query(sql, function(error: Error, result: any, field: any){

                    if(error){

                        console.log(error);

                        let errorQuery = JSON.stringify(error);
        
                        let errorToJson = JSON.parse(errorQuery);
        
                        console.log("Failed delete data drugs...");
        
                        Helper.responseError(response, true, 401, errorToJson.sqlMessage);

                    }else{

                        console.log("Success delete data drugs...");

                        Helper.responseData(response, true, 201, "Success delete data drugs", {});
                    }

                });

}   

DrugModel.getDataById = (response: Response, id: string) =>{

    let sql : string = `SELECT drugs.id, 
                      drugs.category_id, 
                      categories.category_name, 
                      categories.category_color,
                      drugs.drug_number, 
                      drugs.drug_name, 
                      drugs.drug_stock, 
                      drugs.drug_price, 
                      drugs.drug_benefit, 
                      drugs.drug_picture, 
                      drugs.drug_created_at, 
                      drugs.drug_created_by, 
                      drugs.drug_updated_at, 
                      drugs.drug_updated_by 
                      FROM drugs INNER JOIN categories ON drugs.category_id=categories.id 
                      WHERE drugs.id='${id}' AND drug_deleted_at IS NULL AND drug_deleted_by IS NULL`;

        database.query(sql, function(error: Error, result: any, field: any){

            if(error){

                console.log(error);

                console.log("Failed get data drug ....");

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

export default DrugModel;