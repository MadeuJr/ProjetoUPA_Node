const sequelize = require('./dbconnect.js');
const DataTypes = require('sequelize');
const Usuario = require('./usuariodb.js');

const Medico = sequelize.define('medico', {
    idmedico: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    especialidade: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isIn: [
                [
                    'clinico geral',
                    'pediatra',
                    'cirurgião geral',
                    'cardiologista',
                    'neurologista',
                ],
            ],
        },
    },
});

Usuario.hasMany(Medico);
Medico.belongsTo(Usuario, {
    foreignKey: 'cpfusuario',
    onDelete: 'cascade',
});

module.exports = Medico;
