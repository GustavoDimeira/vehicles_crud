const apiUrl = 'http://localhost:5000/vehicles'; // Ajuste se necessário

document.querySelectorAll('.toggle-button').forEach(button => {
    button.addEventListener('click', () => {
        const formContainer = button.nextElementSibling;
        formContainer.style.display = formContainer.style.display === 'none' || !formContainer.style.display ? 'block' : 'none';
    });
});

// Adicionar Veículo
document.getElementById('addVehicle').addEventListener('click', async (e) => {
    const cor = document.getElementById('cor').value;
    const modelo = document.getElementById('modelo').value;
    const placa = document.getElementById('placa').value;

    const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cor, modelo, placa }),
    });

    const result = await response.json();
    if (result.message) {
        alert(result.message)
    } else {
        alert(result);
    }
});

// Listar Veículos
document.getElementById('listVehicles').addEventListener('click', async () => {
    const response = await fetch(apiUrl);
    const vehicles = await response.json();

    const vehicleList = document.getElementById('vehicleList');
    vehicleList.innerHTML = '';

    vehicles.forEach(vehicle => {
        const li = document.createElement('li');
        li.textContent = `ID: ${vehicle._id}, Cor: ${vehicle.cor}, Modelo: ${vehicle.modelo}, Placa: ${vehicle.placa}`;
        vehicleList.appendChild(li);
    });
});

// Atualizar Veículo
document.getElementById('updateVehicle').addEventListener('click', async () => {
    const id = document.getElementById('updateId').value;
    const cor = document.getElementById('updateCor').value;
    const modelo = document.getElementById('updateModelo').value;
    const placa = document.getElementById('updatePlaca').value;

    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ cor, modelo, placa }),
    });

    const result = await response.json();
    if (result.message) {
        alert(result.message)
    } else {
        alert(result);
    }
});

// Deletar Veículo
document.getElementById('deleteVehicle').addEventListener('click', async () => {
    const id = document.getElementById('deleteId').value;

    const response = await fetch(`${apiUrl}/${id}`, {
        method: 'DELETE',
    });

    const result = await response.json();
    if (result.message) {
        alert(result.message)
    } else {
        alert(result);
    }
});
