const express = require("express");
const app = express();
app.use(express.json());

// Estado de cada "campo"
let canales = {
  Battery: 0,
  Water: 0,
  State: 0,
  Motor: 0,
  Audio: 0,
  Image: 0,
  Extra: 0 // field 7
};

// Leer el valor de un canal
app.get("/canal/:nombre", (req, res) => {
  const nombre = req.params.nombre;
  if (canales[nombre] !== undefined) {
    res.send(canales[nombre].toString());
  } else {
    res.status(404).send("Canal no existe");
  }
});

// Escribir un valor en un canal
app.post("/canal/:nombre", (req, res) => {
  const nombre = req.params.nombre;
  const valor = req.body.valor;
  if (canales[nombre] !== undefined) {
    canales[nombre] = valor;
    res.send("OK");
  } else {
    res.status(400).send("Canal no existe");
  }
});

// Servidor en puerto 3000
app.listen(3000, () => console.log("Servidor activo"));