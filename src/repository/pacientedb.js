const sequelize = require('./dbconnect.js');
const DataTypes = require('sequelize');

const Paciente = sequelize.define('paciente', {
    cpf: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    sexo: {
        type: DataTypes.CHAR(1),
        validate:{
            isIn:['f', 'm']
        },
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

module.exports = Paciente;
