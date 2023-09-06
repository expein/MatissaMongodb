const mongoose = require('mongoose')
const { Schema } = mongoose;

const compraSchema = new Schema({
    fechaCompra: Date,
    costoTotal: Number,
    product: String,
    descrip: String
});

module.exports = mongoose.model('compra', compraSchema);