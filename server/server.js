const express = require('express');
const axios = require('axios');
require('dotenv').config();
const app = express();
//const city = "London,uk"

app.use(express.static('dist'));
app.use(express.static('public'));

app.get('/api/:cityParam', (req, res) => {
    let cityParam = req.params.cityParam
    console.log("cityParam", cityParam)
    axios({
        method:"get",
        url: `https://community-open-weather-map.p.rapidapi.com/weather`,
        params: {
            q: cityParam,
          },
        headers: {
            "Content-Type": "application/json",
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com',
            'x-rapidapi-key': process.env.X_RAPIDAPI_KEY
        }
    })
        .then((result) => {
            //console.log(result.data)
            res.send(result.data);
        })
        .catch((error) => {
            console.error(error);
            res.send('An error occured.');
        })
});

module.exports = app;