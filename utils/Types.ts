export interface ICreateCategory {
    id : string,
    category_name : string,
    category_color : string,
    category_created_at : string,
    category_created_by : string,
    category_updated_at : string,
    category_updated_by : string,
}

export interface IUpdateCategory {
    id : string,
    category_name : string,
    category_color : string,
    category_updated_at : string,
    category_updated_by : string,
}

export interface IDeleteCategory {
    id : string,
    category_deleted_by : string,
    category_deleted_at : string 
}
export interface ICreateDrug {
    id : string,
    category_id : string,
    drug_name : string,
    drug_stock : number,
    drug_price : number,
    drug_benefit: string,
    drug_picture?: string,
    drug_created_at : string,
    drug_created_by : string,
    drug_updated_at : string,
    drug_updated_by : string,
}

export interface IUpdateDrug {

    id : string,
    category_id : string,
    drug_name : string,
    drug_stock : number,
    drug_price : number,
    drug_benefit: string,
    drug_picture : string,
    drug_updated_at : string,
    drug_updated_by : string,

}

export interface IDeleteDrug {
    id : string,
    drug_picture : string,
    drug_deleted_at : string,
    drug_deleted_by : string,
}

export interface IUploadImageDrug {
    id : string,
    drug_picture : string,
    drug_updated_at : string,
    drug_updated_by : string
}

export interface IDeleteImage {
    id : string,
    drug_picture : string,
    drug_updated_at : string,
    drug_updated_by : string,
}

export interface ICreateRole {

    id: string,
    role_name: string,
    role_created_at : string,
    role_created_by : string,
    role_updated_at : string,
    role_updated_by : string,
}

export interface IUpdateRole {
    
    id:string,
    role_name: string,
    role_updated_at : string,
    role_updated_by : string,
}
export interface IDeleteRole {
    
    id : string,
    role_deleted_by : string,
    role_deleted_at : string 
}