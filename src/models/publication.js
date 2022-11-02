const mongoose = require("mongoose");

const publicationSchema = mongoose.Schema({
    titulo: {
        type: String,
        required: true
    },
    fecha: {
        type: String,
        required: true
    },
    publicacion: {
        type: String,
        required: true
    },
    creador: {
        type: String,
        required: true
    },

})

module.exports = mongoose.model('publication', publicationSchema)