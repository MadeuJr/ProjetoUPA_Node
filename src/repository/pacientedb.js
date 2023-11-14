const sequelize = require('./dbconnect.js');
const { DataTypes } = require('sequelize');

const Paciente = sequelize.define('paciente', {
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
    },
});

module.exports = Paciente;
