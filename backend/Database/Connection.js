const mysql = require('mysql');

const conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"dashboard"
});

conn.connect((err)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log('Database connected');
    }
})

module.exports = conn;