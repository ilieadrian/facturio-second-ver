const express = require('express');
const mysql = require('mysql')
const dotenv = require('dotenv');

dotenv.config({ path: './.env'})

const app = express();

const db = mysql.createConnection({
    database: process.env.DATABASE,
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    // database: 'facturio-login',
    // host: 'localhost',
    // user: 'root',
    // password: ''
});

db.connect( (error) => {
    if(error) {
        console.log(error);
    }

    else {console.log('MYSQL Connected')}
})

app.get('/', (req,res)=> {
    res.send('<h2>Homepage</h2>')
});

app.listen(5001, () => {
    console.log('Server started at port 5001')
});