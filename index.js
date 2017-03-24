'use strict'

var mongoose = require('mongoose');//Usar funciones de MongoDB
var app = require('./app');//Necesita del servidor WEB.
var port = process.env.PORT || 3977;//Puerto LocalHost

//Coneccion a la base de datos.
mongoose.connect('mongodb://localhost:27017/musify', function(err , res){
	if(err){
		throw err;
	}else{
		console.log("La conexion a la base de datos esta corriendo correctamente.");
		//Servidor funcionando
		app.listen(port , function(){
			console.log("Servidor del APIRest de musica esuchando en HTTP://localhost:" + port);
		})
	}
});

