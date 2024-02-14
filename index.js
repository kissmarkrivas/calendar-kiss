/*
Rutas de Usuarios /Auth
host + /api/auth
*/

const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config()
const cors = require('cors')
// console.log(process.env)
//crear el servidor de express
const app = express();

//base de datos
dbConnection();
app.use(cors())

// directorio publico
app.use(express.static('public'));

//lectura  y parseo del body
app.use(express.json());

//rutas
app.use('/api/auth',require('./routes/auth'));
app.use('/api/events',require('./routes/events'));
// auth crear, login renew
//crud: evenetos


// escuchar peticion 
app.listen(process.env.PORT,()=>{
  console.log(`servidor corriendo en puerto ${process.env.PORT}`);
})