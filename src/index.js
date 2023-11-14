const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = 9713;
const database = require('./repository/dbconnect');

app.use(bodyParser.json);


app.listen(port, () => {
    console.log(`Server listening on port: ${port}!`);
    console.log(`Access http://localhost:`);
});
