const express = require('express');
const mysql = require('mysql2');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
});

app.get('/', (req, res) => {
  db.query('SELECT NOW()', (err, result) => {
    if (err) return res.send(err);
    res.send(`DB Time: ${result[0]['NOW()']}`);
  });
});

app.listen(port, () => console.log(`Server on port ${port}`));
