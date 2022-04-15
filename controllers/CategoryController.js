import { getAllData } from "../models/CategoryModel.js";

export async function getAllCategories(req,res){

    let sql = "SELECT * FROM categories";

    getAllData(res, sql);

}