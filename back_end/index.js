const mongoose = require("mongoose");
const { app } = require("./app");

const PORT = process.env.PORT || 5000; // Você pode definir a porta no .env

(async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/gitsetup", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log("DB CONNECTED");

        app.listen(PORT, () => {
            console.log(`Servidor Express está rodando na porta ${PORT}.`);
        });
    } catch (e) {
        console.error("Falha ao conectar ao MongoDB:", e);
    }
})();
