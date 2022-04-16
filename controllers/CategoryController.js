import { getData, createData, updateData, deleteData } from "../models/CategoryModel.js";
import moment from "moment";
import { v4 as uuidv4 } from 'uuid'; 

export async function getAllCategories(req,res){

    let sql = `SELECT * FROM categories WHERE deleted_at IS NULL AND deleted_by IS NULL`;

    getData(res, sql);

}

export async function getCategoryById(req,res){

    let id = req.params.id;

    let sql = `SELECT * FROM categories WHERE id = '${id}'`;

    getData(res, sql);

}

export async function createCategory(req,res){

    // data post
    let id = uuidv4();
    let name = req.body.name;
    let timeNow = moment().format("YYYY-MM-DD hh:mm:ss");
    let user = 'system'

    let sql = `INSERT INTO categories VALUES ('${id}','${name}', '${timeNow}', '${user}', '${timeNow}', '${user}', ${null}, ${null})`;

    //data for response if success
    let data = {

        "id" : id,
        "name" : name,
        "created_at" : timeNow,
        "created_by" : user,
        "updated_at" : timeNow,
        "updated_by" : user,
        "deleted_at" : null,
        "deleted_by" : null,

    }

    //model create
    createData(res, sql, data);

}

export async function updateCategory(req, res){

    let id = req.params.id;
    let name = req.body.name;
    let user = req.body.updated_by;
    let timeNow = moment().format("YYYY-MM-DD hh:mm:ss");

    let sql = `UPDATE categories SET name='${name}',updated_at='${timeNow}', updated_by='${user}' WHERE id = '${id}' `;

    //data for response if success
    let data = {

        "id" : id,
        "name" : name,
        "updated_at" : timeNow,
        "updated_by" : user,
    }


    updateData(res, sql, data);

}


export async function deleteCategory(req, res){

    let id = req.params.id;
    let user = req.body.deleted_by;
    let timeNow = moment().format("YYYY-MM-DD hh:mm:ss");

    let sql = `UPDATE categories SET deleted_at='${timeNow}', deleted_by='${user}' WHERE id = '${id}' `;
    
    deleteData(res, sql);

}