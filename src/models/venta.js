const mongoose = require('mongoose')
const { Schema } = mongoose;


const detalleVentaSchema = new mongoose.Schema({
    detalleVenta: String,
    idEmpleado: String,
    idServicio: String,
    costoServicio: Number,
});

const ventaSchema = new mongoose.Schema({
    nombreEmpleado: String,
    nombreCliente: String,
    idCita: String,
    fechaRegistro: Date,
    costoTotalCita: Number,
    fechaVentaServicio: Date,
    formaPagoServicio: String,
    estadoVentaServicio: String,
    detallesVenta: [detalleVentaSchema], // Campo que almacena los detalles de venta como un array
});

const Venta = mongoose.model('Venta', ventaSchema);

module.exports = Venta;
