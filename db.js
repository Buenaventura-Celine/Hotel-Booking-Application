const mongoose = require('mongoose')
const mongoURL = 'mongodb+srv://admin:admin123_@cluster0.buswz.mongodb.net/test'
mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true })
const connection = mongoose.connection
connection.on('error', () => {
    console.log('Mongodb connection failed')
})

connection.on('connected', () => {
    console.log('Mongodb connected successfully')
})

module.export = mongoose