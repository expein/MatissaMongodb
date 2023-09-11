const mongoose = require('mongoose')
const { Schema } = mongoose;

const compraSchema = new Schema({
    idCompra: Number,
    fechaCompra: Date,
    descrip: String,
    factura: String
});

module.exports = mongoose.model('compra', compraSchema);