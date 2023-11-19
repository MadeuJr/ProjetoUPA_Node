const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 9713;
const database = require('./repository/dbconnect.js');

const Usuario = require('./repository/usuariodb.js');
const Paciente = require('./repository/pacientedb.js');
const Medico = require('./repository/medico.js');
const Enfermeiro = require('./repository/enfermeirodb.js');
const Repecpcionista = require('./repository/recepcionistadb.js');
const Atendimento = require('./repository/atendimentodb.js');


// Usuario.create({
//     cpf: '1',
//     nome: '1',
//     senha: '1',
//     email: '1',
//     telefone: '1'
// })

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json);

app.listen(port, () => {
    console.log(`Server listening on port: ${port}!`);
    console.log(`Access http://localhost:${port}`);
});
