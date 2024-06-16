// var mongoose = require('mongoose');
import mongoose from 'mongoose';
// var app = require('./app')
import  app  from './app.mjs'
var port = process.env.PORT || 3800
// require('dotenv').config();
import dotenv from 'dotenv'

dotenv.config
//conexion database
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/tecnopac')
	.then(()=>{
		console.log("La conexion a la base de datos se ha realizado correctamente")

		//crear servidor
		app.listen(port, ()=>{
			console.log("Servidor corriendo en http://localhost:3800")
		})

	})
	.catch(err => console.log(err))