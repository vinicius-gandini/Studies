const mongoose = require('mongoose');

const homeSchema = new mongoose.Schema({
    titulo: { tpe: String, required: true},
    descricao: String
});

const homeModel = mongoose.model('Home', homeSchema);