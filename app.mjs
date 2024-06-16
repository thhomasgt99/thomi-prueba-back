
// var express = require('express')
import express from 'express'
// var bodyParser = require('body-parser')
import bodyParser from 'body-parser'
import cors from 'cors'

var app = express()

//cargar rutas
// var user_routes = require('./routes/userRoute')
import user_routes from './routes/userRoute.mjs'

// const cors = require('cors');


//middlewares
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())


//cors
app.use(cors());

// configurar cabeceras http namual
// app.use((req, res, next) => {
// 	res.header('Access-Control-Allow-Origin', '*');
// 	res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
// 	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
// 	res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

// 	next();
// });


//rutas
app.use('/api', user_routes)

//exportar
export default app