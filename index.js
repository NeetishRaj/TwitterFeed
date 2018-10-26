const express = require('express');
const config = require('./config.js');

const port = config.httpPort;

const app = express();


app.listen(port, () => {
    console.log(`Listening on ${port} in ${config.envName} environment`);
});