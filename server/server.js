const express = require('express');
const axios = require('axios');
require('dotenv').config();
const app = express();

app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/api', (req, res) => {
    console.log("we are hitting the api")
    axios({
        method:"get",
        url: `https://community-open-weather-map.p.rapidapi.com/weather`,
        params: {
            q: 'London,uk',
          },
        headers: {
            "Content-Type": "application/json",
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            'x-rapidapi-key': process.env.X_RAPIDAPI_KEY
        }
    })
        .then((result) => {
            console.log(result.data)
            res.send(result.data);
        })
        .catch((error) => {
            console.error(error);
            res.send('An error occured.');
        })
});

module.exports = app;