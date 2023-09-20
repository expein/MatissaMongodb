const mongoose = require("mongoose");
const { Schema } = mongoose;

const proveedorSchema = new Schema({
    tipoProveedor: String,
    nombre: String,
    contacto: String,
    direccion: String,
    telefono: Number,
    estado: String
});

module.exports = mongoose.model("proveedor", proveedorSchema);
