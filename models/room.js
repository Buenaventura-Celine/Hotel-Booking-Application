const mongoose = require('mongoose'); //dealing with database

const roomSchema = mongoose.Schema({
    name: {
        type: 'String',
        required: true
    },
    maxcount: {
        type: 'Number',
        required: true
    },
    phonenumber: {
        type: 'Number',
        required: true
    },
    rentperday: {
        type: 'Number',
        required: true
    },
    imageurls: [],
    currentbookings: []
})