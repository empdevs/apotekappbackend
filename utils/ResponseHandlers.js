export const responseData = function (response, statusCode, values) {
    let data = {
        success: true,
        status: statusCode,
        data: values,
    };
    response.status(statusCode).json(data);
    response.end();
};

