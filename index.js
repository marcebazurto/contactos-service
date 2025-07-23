/*
 CRUD sencillo para mostrar microservicios
*/

const express = require('express');
const cors = require('cors');
const app = express();
const PUERTO = 5001;
let urlApp = "http://localhost:4200";

app.use(express.json());
app.use(cors({ origin: urlApp }))
app.use('/api/v1', require('./rutas/clientes'));

app.listen(PUERTO, () => {
  console.log(`Servidor funcionando en el puerto ${PUERTO}`);
});
