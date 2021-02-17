require("dotenv").config();

const mysql = require("mysql");

//connection to database
const connection = mysql.createConnection({
    host: "localhost",
    user: "quang",
    password: "",
    database: "myFirstCRUD"
});

connection.connect((err) => {
    if (err) throw err;
    console.log("MySQL " + connection.state)
    //create database
    let query = "CREATE DATABASE IF NOT EXISTS myFirstCRUD;"
    connection.query(query, err => {
        if (err) throw err;
        console.log("Database created")
    })
    //create table
    let query1 = "CREATE TABLE IF NOT EXISTS names(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(225) NOT NULL, date_at DATE NOT NULL );"
    connection.query(query1, err => {
        if (err) throw err;
        console.log("Table names created")
    })
});




module.exports = connection;