const express = require('express');
const axios = require('axios');
require('dotenv').config();
//app proxy server
const app = express();


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

app.get('/time/:wikiID', (req, res) => {
    let wikiID = req.params.wikiID
    console.log("wikiID", wikiID)
    axios({
        method:"get",
        url: `https://wft-geo-db.p.rapidapi.com/v1/geo/cities/${wikiID}/time`,
        params: {
            cityid: wikiID,
          },
        headers: {
            "Content-Type": "application/json",
            'x-rapidapi-host': 'wft-geo-db.p.rapidapi.co',
            'x-rapidapi-key': process.env.X_RAPIDAPI_KEY
        }
    })
        .then((result) => {
            res.send(result.data);
            console.log("result.data for city time api", result.data)
        })
        .catch((error) => {
            console.error(error);
            res.send('An error occured.');
        })
});

module.exports = app;