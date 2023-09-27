const mongoose = require('mongoose')
const { Schema } = mongoose;

const servicioSchema = new Schema({
  nombre: String,
  duracion: String,
  precio: Number,
  descripcion: String,
  estado: String,
});

module.exports = mongoose.model('servicio', servicioSchema);