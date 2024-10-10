// Valida se o ID é um formato válido
function validateID(id) {
    const ObjectId = /^[0-9a-fA-F]{24}$/;
    return ObjectId.test(id);
}

// Valida se o modelo do veículo não está vazio e tem um tamanho aceitável
function validateModel(modelo) {
    return typeof modelo === 'string' && modelo.length > 0 && modelo.length <= 100;
}

// Valida se a placa do veículo tem um formato adequado
function validateSing(placa) {
    // Exemplo de formato: ABC1D23 (7 caracteres: 3 letras, 1 número, 1 letra, 2 números)
    const placaRegex = /^[A-Z]{3}\d[A-Z]\d{2}$/i;
    return placaRegex.test(placa);
}

// Exemplo de mensagens de erro
const errors = {
    "400": { message: "Dados inválidos fornecidos." },
    "500": { message: "Erro interno do servidor." }
};

module.exports = { validateID, validateModel, validateSing, errors };
