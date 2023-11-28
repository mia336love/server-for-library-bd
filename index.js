import express from 'express'
import path from 'path'

// const pgp = require('pg-promise')
// import pgp from 'pg-promise'
// const db = pgp('postgres://root:123@localhost:5432/library v2');
import pkg from 'pg';
const { Pool } = pkg;

const __dirname = path.resolve()
const PORT = 3000
const app = express()   // инициализация


app.use(express.static(path.resolve(__dirname, 'static')))

// app.get('/', (req, res) => {
//     // res.send('<h1>桃子！</h1>')
//     res.sendFile(path.resolve(__dirname, 'static', 'index.html'))
// })

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}...`);
})        

const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'library v2',
    password: '123',
    port: 5432,
})

pool.query('SELECT * FROM readers', (err, res) => {
    if (err) {
      console.error(err);
    } else {
      console.log(res.rows);
    }
  });
