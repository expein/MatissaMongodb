const mongoose = require("mongoose");
const { Schema } = mongoose;

const productoSchema = new Schema({
  nombre: String,
  descripcion: String,
  saldoInventario: Number,
  precioVenta: Number,
  estado: String
});

module.exports = mongoose.model("producto", productoSchema);
