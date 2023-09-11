const mongoose = require('mongoose')
const { Schema } = mongoose;

const pedidoSchema = new Schema({
    idPedido: Number,
    fechaPedido: Date,
    costoTotal: Number,
    product: String,
    cant: Number,
    client: String
});

module.exports = mongoose.model('pedido', pedidoSchema);