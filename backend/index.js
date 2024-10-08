const express = require('express');
const app = express();
const bodyParser = require('body-parser');
require('dotenv').config();
require('./Models/db');

const PORT = process.env.PORT || 8080;


app.get('/ping', (req, res) => {
    res.send('PONG');
})

app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})