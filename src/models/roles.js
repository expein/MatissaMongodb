const mongoose = require('mongoose')
const { Schema } = mongoose;

const rolSchema = new Schema({
    nombreRol: String,
    estadoRol: Number,
    permisos: Object
});

module.exports = mongoose.model('rol', rolSchema);