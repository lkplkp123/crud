import express from "express";
import Connection from './database/db.js'
import dotenv from 'dotenv'
import Router from './routes/route.js'
import cors from 'cors'
import bodyParser from 'body-parser'
const app = express()
dotenv.config()
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use('/', Router)
const PORT = process.env.DB_PORT
const Dbname = process.env.DB_NAME
Connection(Dbname)
app.listen(PORT, () => console.log(`server is running on ${PORT} `))