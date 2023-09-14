const mongoose = require('mongoose')
const { Schema } = mongoose;

const ventaSchema = new Schema({
    idVenta: Number,

    idVentaServicio: Number,
    idCliente: Number,
    nombreCliente: String,
    idCita: Number,
    fechaRegistro: Number,
    costoTotalCita: Number,
    fechaVentaServicio: Date,
    formaPagoServicio: String,
    estadoVentaServicio: String,

    idVentaPedido: Number,
    idPedido: Number,
    fechaPedido: Date,
    idDetallePedido: Number,
    cantidadProducto: Number,
    precioUnitario: Number,
    idProducto: Number,
    nombreProducto: String,
    fechaVentaPedido: Date,
    formaPagoPedido: String,
    estadoVentaPedido: String
});

module.exports = mongoose.model('venta', ventaSchema);