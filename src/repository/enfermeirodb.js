const sequelize = require('./dbconnect.js');
const DataTypes = require('sequelize');
const Usuario = require('./usuariodb.js');

const Enfermeiro = sequelize.define('enfermeiro', {
    idenfermeiro:{
        type:DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
        allowNull: false,
    },
})

Enfermeiro.belongsTo(Usuario)
Usuario.hasMany(Enfermeiro,{
    foreignKey: 'cpfusuario',
    onDelete: 'cascade'
})

module.exports = Enfermeiro