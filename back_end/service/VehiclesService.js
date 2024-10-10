// service/VehiclesService.js

class VehiclesService {
    constructor(vehicleModel) {
        this.vehicleModel = vehicleModel;
    }

    async addVehicles(cor, modelo, placa) {
        const vehicle = new this.vehicleModel({ cor, modelo, placa });
        await vehicle.save();
        return { msg: 'Veículo adicionado com sucesso!', code: 201 };
    }

    async getByID(ID) {
        const vehicle = await this.vehicleModel.findById(ID);
        if (!vehicle) {
            return { msg: 'Veículo não encontrado.', code: 404 };
        }
        return { msg: vehicle, code: 200 };
    }

    async getAll() {
        const vehicles = await this.vehicleModel.find();
        return { msg: vehicles, code: 200 };
    }

    async updateVehicles(ID, updateData) {
        const updatedVehicle = await this.vehicleModel.findByIdAndUpdate(ID, updateData, { new: true });
        if (!updatedVehicle) {
            return { msg: 'Veículo não encontrado.', code: 404 };
        }
        return { msg: 'Veículo atualizado com sucesso!', code: 200 };
    }

    async deleteVehicles(ID) {
        const deletedVehicle = await this.vehicleModel.findByIdAndDelete(ID);
        if (!deletedVehicle) {
            return { msg: 'Veículo não encontrado.', code: 404 };
        }
        return { msg: 'Veículo deletado com sucesso!', code: 200 };
    }
}

module.exports = { VehiclesService };
