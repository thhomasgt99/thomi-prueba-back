'use strict'

var mongoose = require('mongoose');
var app = require('./app')
var port = process.env.PORT || 3800
require('dotenv').config();

//conexion database
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URL)
	.then(()=>{
		console.log("La conexion a la base de datos se ha realizado correctamente")

		//crear servidor
		app.listen(port, ()=>{
			console.log("Servidor corriendo en http://localhost:3800")
		})

	})
	.catch(err => console.log(err))

export default app