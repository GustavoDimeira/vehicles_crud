# CRUD de Veículos

Este projeto é uma aplicação web simples que permite realizar operações CRUD (Criar, Ler, Atualizar e Deletar) para gerenciar informações de veículos. A aplicação consiste em um frontend em HTML e um backend em Node.js com MongoDB.

Funcionalidades:
- Adicionar Veículo: Permite cadastrar um novo veículo informando a cor, modelo e placa.
- Listar Veículos: Exibe todos os veículos cadastrados.
- Atualizar Veículo: Permite atualizar os dados de um veículo existente.
- Deletar Veículo: Remove um veículo do cadastro.

Tecnologias Utilizadas:
- Frontend: HTML, CSS, JavaScript
- Backend: Node.js, Express, MongoDB
- CORS: Para permitir requisições de diferentes origens

Estrutura do Projeto:
vehicles-crud/
├── backend/
│   ├── app.js
│   ├── index.js
│   ├── model/
│   │   └── VehiclesModel.js
│   ├── service/
│   │   └── VehiclesService.js
│   ├── utils.js
├── frontend/
│   ├── index.html
│   ├── script.js
│   └── styles.css
└── README.md

Como Configurar:
1. Clone o repositório:
   git clone https://github.com/GustavoDimeira/vehicles_crud
   cd vehicles_crud

2. Instale as dependências do backend:
   cd backend
   npm install

3. Configure o MongoDB:
   Certifique-se de que o MongoDB esteja instalado e em execução.

4. Inicie o servidor:
   node index.js

5. Abra o frontend:
   Abra o arquivo index.html no navegador.

Exemplos de Entrada:
Aqui estão alguns exemplos de dados que você pode usar para cadastrar veículos:
- Exemplo 1:
  - Cor: Vermelho
  - Modelo: Fusca
  - Placa: ABC1D23

- Exemplo 2:
  - Cor: Azul
  - Modelo: Corolla
  - Placa: DEF2G45

- Exemplo 3:
  - Cor: Preto
  - Modelo: Civic
  - Placa: GHI3H67

Como Usar:
1. Adicionar Veículo: Preencha os campos de cor, modelo e placa e clique em "Adicionar Veículo".
2. Listar Veículos: Clique no botão "Listar Veículos" para ver todos os veículos cadastrados.
3. Atualizar Veículo: Insira o ID do veículo que deseja atualizar e clique em "Atualizar Veículo".
4. Deletar Veículo: Insira o ID do veículo que deseja deletar e clique em "Deletar Veículo".
