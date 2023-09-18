const mongoose = require('mongoose')
const { Schema } = mongoose;

const compraSchema = new Schema({
    idCompra: Number,
    fechaCompra: Date,
    descrip: String,
    factura: String,
    DetallesCompra:[{
        codigoDetalleCompra: [{type:Number}],
        proveedor: [{type:String}],
        product: [{type:String}],
        precio: [{type: Number}],
        cantidad: [{type: Number}]
    }]
});

module.exports = mongoose.model('compra', compraSchema);