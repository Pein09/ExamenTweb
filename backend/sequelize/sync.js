import { DATE, Sequelize } from "sequelize";
import { sequelizeConfigProps } from "../config.js";
import { sequelizeOperationsAPI } from "./operations-api.js";

//facem un seq connection

const sequelizeConnection = new Sequelize(
    "examen_instance",
    "root",
    "akatsu123",
    sequelizeConfigProps
    );


    export const VirtualShelf = sequelizeConnection.define("VirtualShelf", {
        VirtualShelfId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        Description:{
            type: Sequelize.STRING,
            allowNull: false,

        },
       Date:{
           type: Sequelize.DATE,
           allowNull:false,
       }
    });


    export const Books = sequelizeConnection.define("Books", {
        BookId: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false,
        },
        Title: {
            type:Sequelize.STRING(50),
            allowNull:false,
        },
        Genre: {
            type: Sequelize.ENUM("Cooking", "SF", "Action", "Drama", "Love", "IT"),
            allowNull:false,
        },
        Url: {
            type:Sequelize.STRING(50),
            allowNull:false,
        }
    });

    //14. one to many intre produse si comenzi
    VirtualShelf.hasMany(Books, {
    foreignKey: "VirtualShelfId",
    onDelete: "CASCADE",
    foreignKeyConstraint: true,
});

/* ENTITIES */  

    sequelizeOperationsAPI.init(sequelizeConnection);
    export {sequelizeConnection};