//Importar librerias
const express = require("express");
const cors = require("cors");
const { pool } = require("pg");

//Crear la app de express
const app = express();

//Configuracion basica
const port = 3000;

//Middlewares
app.use(cors()); //Permite que react pueda llamar a este servidor
app.use(express.json()); //Permite leer JSON en req.body

//Configurar conexion a PostgreSQL
const pool = new pool({
  user: "postgres",
  host: "localhost",
  database: "registro",
  password: "0000",
  port: 5432,
});

//Ruta de read (Obtener todos los items)
//Get /api/items

//El servidor esta escuchando
app.listen(port, () => {
  console.log("El servidor esta escuchando en el" + port);
});
