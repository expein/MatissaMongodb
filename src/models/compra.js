const mongoose = require('mongoose')
const { Schema } = mongoose;

detallesCompra = new Schema({
  detalleCompra: Number,
  proveedor: String,
  product: String,
  precio: Number,
  cantidad: Number,
  costoTotalUnitario: Number
});

const compraSchema = new Schema({
  fechaCompra: {
    type: Date,
    get: function (val) {
      return val ? val.toISOString().split("T")[0] : null;
    },
    set: function (val) {
      return val;
    },
  },
  descrip: String,
  factura: String,
  costoTotalCompra: Number,
  DetallesCompra: [detallesCompra],
});

module.exports = mongoose.model('compra', compraSchema);