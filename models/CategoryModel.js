import database from "../config/Database.js";
import { Sequelize } from "sequelize";

const { DataTypes } = Sequelize

//Model Table Categories
export const Categories = database.define("categories", {

    "id" : {

        type : DataTypes.STRING,
        primaryKey: true,
        allowNull : false

    },
    "name" : {

        type : DataTypes.STRING,
        unique : true

    },
    "created_at" : {

        type : DataTypes.DATE
    },
    "created_by" : {

        type : DataTypes.STRING
    },
    "updated_at" : {

        type : DataTypes.DATE
    },
    "updated_by" : {

        type : DataTypes.STRING
    },
    "deleted_at" : {

        type : DataTypes.DATE

    },
    "deleted_by" : {

        type : DataTypes.STRING

    }

},{
    
    timestamps: false,
    freezeTableName : true
});
