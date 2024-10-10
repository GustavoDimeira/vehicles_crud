const express = require('express');
const { validateID, validateModel, validateSing, errors } = require('./utils');
const { VehiclesService } = require('./service/VehiclesService');
const VehiclesModel = require('./model/VehiclesModel');

const vehiclesService = new VehiclesService(VehiclesModel);
const app = express();

app.use(express.json());
app.use((_req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    next();
});

app.get('/', (_req, res) => {
    res.status(200).json("Hello World!");
});

// Definição das rotas
app.get('/vehicles/:ID', async (req, res) => {
    const ID = req.params.ID;

    if (validateID(ID)) {
        try {
            const { msg, code } = await vehiclesService.getByID(ID);
            res.status(code).json(msg);
        } catch (error) {
            res.status(500).json({ ...errors["500"], error });
        }
    } else {
        res.status(400).json(errors["400"]);
    }
});

// Rota para listar todos os veículos
app.get('/vehicles', async (_req, res) => {
    try {
        const { msg, code } = await vehiclesService.getAll();
        res.status(code).json(msg);
    } catch (error) {
        res.status(500).json({ ...errors["500"], error });
    }
});

// Rota para adicionar um novo veículo
app.post('/vehicles', async (req, res) => {
    const { cor, modelo, placa } = req.body;

    if (validateModel(modelo) && validateSing(placa)) {
        try {
            const { msg, code } = await vehiclesService.addVehicles(cor, modelo, placa);
            res.status(code).json(msg);
        } catch (error) {
            res.status(500).json({ ...errors["500"], error });
        }
    } else {
        res.status(400).json(errors["400"]);
    }
});

// Rota para atualizar um veículo existente
app.put('/vehicles/:ID', async (req, res) => {
    const ID = req.params.ID;
    const { cor, modelo, placa } = req.body;

    if (validateID(ID)) {
        try {
            const { msg, code } = await vehiclesService.getByID(ID);
            if (code === 404) {
                res.status(code).json(msg);
            } else {
                if (validateModel(modelo) && validateSing(placa)) {
                    const { msg, code } = await vehiclesService.updateVehicles(ID, { cor, modelo, placa });
                    res.status(code).json(msg);
                } else {
                    res.status(400).json(errors["400"]);
                }
            }
        } catch (error) {
            res.status(500).json({ ...errors["500"], error });
        }
    }  else {
        res.status(400).json(errors["400"]);
    }
});

// Rota para deletar um veículo
app.delete('/vehicles/:ID', async (req, res) => {
    const ID = req.params.ID;

    if (validateID(ID)) {
        try {
            const { msg, code } = await vehiclesService.getByID(ID);
            if (code === 404) {
                res.status(code).json(msg);
            } else {
                const { msg, code } = await vehiclesService.deleteVehicles(ID);
                res.status(code).json(msg);
            }
        } catch (error) {
            res.status(500).json({ ...errors["500"], error });
        }
    }  else {
        res.status(400).json(errors["400"]);
    }
});

module.exports = { app };
