const express = require("express");
const { Productos } = require("../models");
const router = express.Router();

//Crear Los Productos:
router.post("/", (req, res) => {
  const { name, clase, descripcion, precio, talle, imagen } = req.body;
  Productos.create({
    name,
    clase,
    descripcion,
    precio,
    talle,
    imagen,
  }).then((data) => {
    res.status(201).send(data);
  });
});

//Buscar Todos Los Productos:
router.get("/", (req, res) => {
  Productos.findAll().then((data) => {
    res.status(200).send(data);
  });
});

//Buscar Productos Por ID:
router.get("/:id", (req, res) => {
  const { id } = req.params;

  Productos.findByPk(id).then((data) => {
    res.status(200).send(data);
  });
});

//Editar Productos:
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const { name, clase, descripcion, precio, talle, imagen } = req.body;

  Productos.update(
    { name, clase, descripcion, precio, talle, imagen },
    { where: { id } }
  ).then((data) => {
    res.status(200).send(data);
  });
});

module.exports = router;
