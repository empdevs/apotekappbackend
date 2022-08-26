import { Response } from "express";

export default class Helper {

        static responseData(response: Response, statusSuccess: boolean , statusCode: number, message: string ,data: any){

            let dataResponse : {success: boolean, status: number, message: string, data: any} = {

                "success": statusSuccess,
                "status": statusCode,
                "message": message,
                "data": data, 

            }

            return response.status(statusCode).json(dataResponse);
           
        };

        static responseError(response: Response, statusError: boolean, statusCode: number, message: any){

            let dataResponse : {error: any, status: number, message: any} = {

                "error": statusError,
                "status": statusCode,
                "message": message,

            }

            return response.status(statusCode).json(dataResponse);

        }
    
    

}