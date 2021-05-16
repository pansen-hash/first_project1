const mysql = require("mysql");
const DB = {
    host: 'localhost',
    user: 'root',
    port: 3306,
    password: '1132836340',
    database: 'first_project',


};
const DBConnection = mysql.createConnection({
    host: DB.host,
    user: DB.user,
    port: DB.port,
    password: DB.password,
    database: DB.database,
    multipleStatements: true
});
DBConnection.connect();
module.exports.DBConnection = DBConnection;