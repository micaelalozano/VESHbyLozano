const Sequelize = require("sequelize");
const db = require("../db");

class Productos extends Sequelize.Model {}

Productos.init(
  {
    name: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    clase: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: Sequelize.DataTypes.TEXT,
      allowNull: false,
    },
    precio: {
      type: Sequelize.DataTypes.INTEGER, //biginit
      allowNull: false,
    },
    talle: {
      type: Sequelize.DataTypes.TEXT,
      allowNull: false,
    },
    imagen: {
      type: Sequelize.DataTypes.STRING,
      allowNull: false,
    },
  },
  { sequelize: db, modelName: "productos" }
);

module.exports = Productos;