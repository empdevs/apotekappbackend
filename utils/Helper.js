export default class Helper {

        static responseData(response, statusSuccess , statusCode, message ,data){

            let dataResponse = {

                "success": statusSuccess,
                "status": statusCode,
                "message": message,
                "data": data 

            }

            return response.status(statusCode).json(dataResponse);
           
        };

        static responseError(response, statusError, statusCode, message){

            let dataResponse = {

                "error": statusError,
                "status": statusCode,
                "message": message,

            }

            return response.status(statusCode).json(dataResponse);

        }
    
    

}