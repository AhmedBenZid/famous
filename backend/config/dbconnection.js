const mysql = require("mysql");
const mysqlConfig = require("./config.js");
const connection = mysql.createConnection(mysqlConfig);

connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

//                                            /-- Users methods --/

//Register User

const checkUserEmail = (email, callback) => {
    let sql =
        `select email from user where email=?`;
    connection.query(sql, email, (err, data) => {
        if (err) throw callback(err, null);
        callback(null, data);
    });
}

const registerUser = (arr, callback) => {
    let sql =
        "insert into user (firstName ,lastName, email, password,address,role) values (?,?,?,?,?,'user')";
    connection.query(sql, arr, (err, data) => {
        if (err) throw (err);
        console.log(data)
    });
};

const loginUser = (arr, callback) => {
    let sql =
        ""
}

const getUser = (callback) => {
    let sql = 'select * from user';
    connection.query(sql, (err, data) => {
        if (err) throw callback(err, null);
        callback(null, data);
    })
};

module.exports = {
    registerUser,
    checkUserEmail,
    getUser
}