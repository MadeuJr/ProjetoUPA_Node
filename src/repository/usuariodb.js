const sequelize = require('./dbconnect.js');
const DataTypes = require('sequelize');

const Usuario = sequelize.define('usuario', {
    cpf: {
        type: DataTypes.STRING(11),
        primaryKey: true,
        allowNull: false
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefone: {
        type: DataTypes.STRING,
        allowNull: true
    },
    funcao: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [['administrador','medico', 'recepcionista', 'enfermeiro']]
        }
    }
});

module.exports = Usuario;
