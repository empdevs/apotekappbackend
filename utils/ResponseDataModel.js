export default class ResponseType {

    static createCategory(data){

        return {

            "id" : data.id,
            "name" : data.name,
            "created_at" : data.created_at,
            "created_by" : data.created_by,
            "updated_at" : data.updated_at,
            "updated_by" : data.updated_by,
            "deleted_at" : null,
            "deleted_by" : null,

        }

    }

    static updateCategory(data){

        return {

            "id" : data.id,
            "name" : data.name,
            "created_at" : data.created_at,
            "created_by" : data.created_by,
            "updated_at" : data.updated_at,
            "updated_by" : data.updated_by,
            "deleted_at" : null,
            "deleted_by" : null,

        }

    }

}