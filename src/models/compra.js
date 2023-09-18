const mongoose = require('mongoose')
const { Schema } = mongoose;

detallesCompra = new Schema({
  codigoDetalleCompra: Number,
  proveedor: String,
  product: String,
  precio: Number,
  cantidad: Number,
});

const compraSchema = new Schema({
    idCompra: Number,
    fechaCompra: Date,
    descrip: String,
    factura: String,
    DetallesCompra:[detallesCompra]
});

module.exports = mongoose.model('compra', compraSchema);