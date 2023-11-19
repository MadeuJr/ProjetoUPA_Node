const sequelize = require('./dbconnect.js');
const DataTypes = require('sequelize');
const Usuario = require('./usuariodb.js');

const Recepcionista = sequelize.define('recepcionista', {
    idrecepcionista: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
});

Usuario.hasMany(Recepcionista);
Recepcionista.belongsTo(Usuario, {
    foreignKey: 'cpfusuario',
    onDelete: 'cascade',
});

module.exports = Recepcionista;
