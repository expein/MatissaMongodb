const mongoose = require('mongoose')
const { Schema } = mongoose;

const compraSchema = new Schema({
    idCompra: Number,
    fechaCompra: Date,
    descrip: String,
    factura: String,
    DetallesCompra:[{
        codigoDetalleCompra: Number,
        proveedor: String,
        product: String,
        precio: Number,
        cantidad: Number
    }]
});

module.exports = mongoose.model('compra', compraSchema);