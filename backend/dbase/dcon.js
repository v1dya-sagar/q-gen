require('dotenv').config();
const mysql = require('mysql');

const questionbank = mysql.createConnection({
    host:`${process.env.DHOST}`,
    user:`${process.env.DUSER}`,
    password:`${process.env.DPASS}`
})

questionbank.connect((err)=>{
    if(err) throw err;
    questionbank.query("CREATE DATABASE IF NOT EXISTS qgendb");
})

module.exports = {
    questionbank
}