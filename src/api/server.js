const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const {json} = require('body-parser');
const axios = require('axios');

const app = express();

app.use(cors());
app.use(json());

const BASE_URL = `https://jsonplaceholder.typicode.com/albums`;

app.get('/photos', async(req, res) => {

    const response = await axios.get(BASE_URL);
    
    
    return res.send(response.data);
});

const PORT = 7000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));

