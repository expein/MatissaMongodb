const mongoose = require('mongoose')
const { Schema } = mongoose;

const servicioSchema = new Schema({
    idServicio: Number,
    idEmpleado: Number,
    idCita: Number,
    nombreServicio: String,
    precioServicio: Number,
    nombreEmpleado: String,
    cedulaEmpleado: String,
    duracionServicio: Number,
    estadoCita: Number,
    fechaCita: Date
});

module.exports = mongoose.model('servicio', servicioSchema);