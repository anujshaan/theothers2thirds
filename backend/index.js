const express = require('express');
const mysql = require('mysql');
const myConn = require('./Database/Connection');
const authRoute = require('./Routes/authRoute');
const mainRoute = require('./Routes/mainData');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoute);
app.use('/api/home', mainRoute);

app.listen(8800,()=>{
    console.log("server is up and running at 8800");
})