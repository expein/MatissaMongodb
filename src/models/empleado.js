const mongoose = require("mongoose");
const { Schema } = mongoose;

const empleadoSchema = new Schema({
  nombres: String,
  apellidos: String,
  genero: String,
  fechaContrato: {
    type: Date,
    get: function (val) {
      return val ? val.toISOString().split("T")[0] : null;
    },
    set: function (val) {
      return val;
    },
  },
  fechaNacimiento: {
    type: Date,
    get: function (val) {
      return val ? val.toISOString().split("T")[0] : null;
    },
    set: function (val) {
      return val;
    },
  },
  correo: String,
  direccion: String,
  telefono: Number,
  estado: String,
});

module.exports = mongoose.model("empleado", empleadoSchema);
