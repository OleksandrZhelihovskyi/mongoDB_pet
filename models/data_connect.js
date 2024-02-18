const mongoose = require('mongoose')
require('dotenv').config()
const url = `mongodb+srv://OleksandrZhelihovskyi:${process.env.DB_PASSWORD}@clusterwebplx.ks0jmft.mongodb.net/sample_guides?retryWrites=true&w=majority`
module.exports = mongoose.createConnection(url)