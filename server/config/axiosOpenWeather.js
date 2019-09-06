const axios = require('axios');
module.exports = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5'
});