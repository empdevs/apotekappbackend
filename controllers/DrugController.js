import moment from "moment";
import { v4 as uuidv4 } from 'uuid'; 
import { createData } from "../models/DrugModel.js";

export function createDrug(req, res){
   
    let id = uuidv4();
    let categoryId = req.body.category_id;
    let name = req.body.name;
    let stock = req.body.stock;
    let price = req.body.price;
    let benefit = req.body.benefit;
    let picture = req.body.picture;
    let createdBy = req.body.created_by;
    let updatedBy = req.body.updated_by;
    let timeNow = moment().format("YYYY-MM-DD hh:mm:ss");

    if((!name || name.match(/^ *$/) !== null)|| (!stock || stock.match(/^ *$/) !== null) || (!price || price.match(/^ *$/) !== null) || (!picture || picture.match(/^ *$/) !== null )){

        let errorObj = {

            "error" : true,
            "status" : 401,
            "message" : "Please insert require field",

        }

        return res.status(errorObj.status).json(errorObj);

    }else{

        let sql = `INSERT INTO drugs VALUES('${id}','${categoryId}','${''}','${name}','${stock}','${price}','${benefit}','${picture}','${timeNow}','${createdBy}','${timeNow}','${updatedBy}',${null},${null})`;

        let data = {

            "id" : id,
            "category_id" : categoryId,
            "name" : name,
            "stock" : stock,
            "price" : price,
            "benefit": benefit,
            "picture" : picture,
            "created_at" : timeNow,
            "created_by" : createdBy,
            "updated_at" : timeNow,
            "updated_by" : updatedBy,
            "deleted_at" : null,
            "deleted_by" : null,

        }

        return createData(res, sql, data)

    }

}