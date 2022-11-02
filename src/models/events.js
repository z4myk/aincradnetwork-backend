const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    hora:{
        type: String,
        required: true,
    },
    servidor: {
        type: String,
        required: true
    },
    
})
module.exports = mongoose.model('events', eventSchema)