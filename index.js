'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

//Coneccion a la base de datos.
mongoose.connect('mongodb://localhost:27017/musify', (err , res) =>{
	if(err){
		throw err;
	}else{
		console.log("La conexion a la base de datos esta corriendo correctamente.");
		app.listen(port , function(){
			console.log("Servidor del APIRest de musica esuchando en HTTP://localhost:" + port);
		})
	}
});

