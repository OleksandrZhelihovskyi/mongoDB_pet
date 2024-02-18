const mongoose = require('mongoose')
const connection = require('./data_connect')
const sizeSchema = new mongoose.Schema({
    size: String, // String is shorthand for {type: String}
})

module.exports = connection.model('size', sizeSchema);