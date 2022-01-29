export var databaseConfigProps = {

    port: 3306,
    host: "Localhost",
    user: "root",
    password: "akatsu123",
    database: "examen_instance",

};

export const sequelizeConfigProps = {

    host: "Localhost",
    dialect: "mariadb",
    dialectOptions: {
        options: {
            trustedConnection: true,
                },
    },


};
// let config

// if (process.env.NODE_ENV=='production') {
//   config = {
//     logging: false,
//     ssl: true,
//     dialectOptions: {
//       ssl: {
//         require: true,
//         rejectUnauthorized: false
//       }
//     }
//   }
// } else {
//   config = {
//     logging: false
//   }
// }

//export const sequelizeConnection = new Sequelize(DATABASE_URL,config);
