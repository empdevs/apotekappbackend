import { ICreateCategory } from "./Types"

export default class ResponseType {

    static createCategory(data: ICreateCategory){

        return {

            "id" : data.id,
            "category_name" : data.category_name,
            "category_color" : data.category_color,
            "category_created_at" : data.category_created_at,
            "category_created_by" : data.category_created_by,
            "category_updated_at" : data.category_updated_at,
            "category_updated_by" : data.category_updated_by,
            "category_deleted_at" : null,
            "category_deleted_by" : null,

        }

    }

    static updateCategory(data: ICreateCategory){

        return {

            "id" : data.id,
            "category_name" : data.category_name,
            "category_color" : data.category_color,
            "category_created_at" : data.category_created_at,
            "category_created_by" : data.category_created_by,
            "category_updated_at" : data.category_updated_at,
            "category_updated_by" : data.category_updated_by,
            "category_deleted_at" : null,
            "category_deleted_by" : null,

        }

    }

    static createDrug(data: any){

        return {

            "id" : data.id,
            "category_id" : data.category_id,
            "drug_name" : data.drug_name,
            "drug_stock" : data.drug_stock,
            "drug_price" : data.drug_price,
            "drug_benefit" : data.drug_benefit,
            "drug_picture" : data.drug_picture,
            "drug_created_at" : data.drug_created_at,
            "drug_created_by" : data.drug_created_by,
            "drug_updated_at" : data.drug_updated_at,
            "drug_updated_by" : data.drug_updated_by,
            "drug_deleted_at" : null,
            "drug_deleted_by" : null,
        }

    }
    static updateDrug(data: any){

        return {

            "id" : data.id,
            "category_id" : data.category_id,
            "drug_name" : data.drug_name,
            "drug_stock" : data.drug_stock,
            "drug_price" : data.drug_price,
            "drug_benefit" : data.drug_benefit,
            "drug_picture" : data.drug_picture,
            "drug_created_at" : data.drug_created_at,
            "drug_created_by" : data.drug_created_by,
            "drug_updated_at" : data.drug_updated_at,
            "drug_updated_by" : data.drug_updated_by,
            "drug_deleted_at" : null,
            "drug_deleted_by" : null,
        }

    }

}