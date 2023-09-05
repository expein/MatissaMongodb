const mongoose = require('mongoose');
const { mongodb } = require('./keys')

mongoose.connect(mongodb.uri, {})
    .then(db => console.log('Database connection'))
    .catch(err => console.log(err));