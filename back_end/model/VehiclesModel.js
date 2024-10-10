// model/VehiclesModel.js

const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
    cor: { type: String, required: true },
    modelo: { type: String, required: true },
    placa: { type: String, required: true, unique: true }
}, { timestamps: true });

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
