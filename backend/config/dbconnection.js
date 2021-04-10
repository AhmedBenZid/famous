const mysql = require("mysql");
const mysqlConfig = require("./config.js");
module.exports = connection = mysql.createConnection(mysqlConfig);

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});