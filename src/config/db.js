const mysql = require('mysql2');
const dotenv = require("dotenv");
dotenv.config();

const connection = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD ,
    database:process.env.DB_NAME,
    port:process.env.MYSQL_PORT
});
connection.connect((error)=>{
    if(error){
        console.log(error);
    }else{
        console.log("database connection established successfully!");
    }
});




module.exports = connection;