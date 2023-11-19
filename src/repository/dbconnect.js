const { Sequelize } = require("sequelize");

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.db',
});

sequelize
    .sync()
    .then(() => {
        console.log('Conexão bem-sucedida.');
    })
    .catch((err) => {
        console.error('Erro na conexão:', err);
    });


module.exports = sequelize;