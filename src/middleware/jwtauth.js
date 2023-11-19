const jwt = require('jsonwebtoken');
const fs = require('fs');

const SECRET_KEY = fs.readFileSync('./src/private.key');

exports.assinaJWT = async (req, res) => {

    

};
