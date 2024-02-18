const mongoose = require('mongoose')
const connection = require('./data_connect')
const planetSchema = new mongoose.Schema({
    name: String, // String is shorthand for {type: String}
    orderFromSun: Number,
    hasRings: Boolean,
    mainAtmosphere: [String],
    surfaceTemperatureC: {
        min: Number,
        max: Number,
        mean: Number,
      },
    size_id:String,
    size: { type: mongoose.ObjectId, ref: 'size' }
})

module.exports = connection.model('planet', planetSchema);