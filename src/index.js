const express = require('express')
const app = express()
const port = 9713


app.listen(port, () => {
    console.log(`Server listening on port: ${port}!`);
    console.log(`Access http://localhost:`);
})