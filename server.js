const express = require("express");
const app = express();
app.use(express.json());

let canales = {
  motor: 0,
  sensor1: 0,
  sensor2: 0
};

app.get("/canal/:nombre", (req, res) => {
  const nombre = req.params.nombre;
  if (canales[nombre] !== undefined) {
    res.send(canales[nombre].toString());
  } else {
    res.status(404).send("Canal no existe");
  }
});

app.post("/canal/:nombre", (req, res) => {
  const nombre = req.params.nombre;
  const valor = req.body.valor;
  if (canales[nombre] !== undefined && (valor === 0 || valor === 1)) {
    canales[nombre] = valor;
    res.send("OK");
  } else {
    res.status(400).send("Error en canal o valor");
  }
});

app.listen(3000, () => console.log("Servidor activo"));
