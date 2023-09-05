const byCrypt = require('bcrypt-nodejs');
const mongoose = require('mongoose')
const { Schema } = mongoose;


const userSchema = new Schema({
    name: String,
    password: String,
    email: String,
    rol: String
}); 

userSchema.methods.encryptPass = (password) => {
    return byCrypt.hashSync(password, byCrypt.genSaltSync(10));
};

userSchema.methods.validatePass = function (password) {
    return byCrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('user',userSchema);