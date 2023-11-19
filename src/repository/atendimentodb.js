const sequelize = require('./dbconnect.js');
const DataTypes = require('sequelize');
const Medico = require('./medico.js');
const Recepcionista = require('./recepcionistadb.js');
const Paciente = require('./pacientedb.js');
const Enfermeiro = require('./enfermeirodb.js');

const Atendimento = sequelize.define('atendimento', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    risco: {
        type: DataTypes.STRING,
        allowNull: true,
        validate: {
            isIn: [
                [
                    'não urgente',
                    'pouco urgente',
                    'urgente',
                    'muito urgente',
                    'emergência',
                ],
            ],
        },
    },
    alta: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
});

Atendimento.belongsTo(Medico);
Atendimento.belongsTo(Recepcionista);
Atendimento.belongsTo(Paciente);
Atendimento.belongsTo(Enfermeiro);

Medico.hasMany(Atendimento, {
    foreignKey: 'idmedico',
    allowNull: true,
    onDelete: 'set null',
});
Recepcionista.hasMany(Atendimento, {
    foreignKey: 'idrecepcionista',
    allowNull: true,
    onDelete: 'set null',
});
Paciente.hasMany(Atendimento, {
    foreignKey: 'cpfpaciente',
    allowNull: true,
    onDelete: 'set null',
});
Enfermeiro.hasMany(Atendimento, {
    foreignKey: 'idenfermeiro',
    allowNull: true,
    onDelete: 'set null',
});

module.exports = Atendimento;
