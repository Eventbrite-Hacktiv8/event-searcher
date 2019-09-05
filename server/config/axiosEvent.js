const axios = require('axios');
const EVENTBRITE_TOKEN = process.env.EVENTBRITE_TOKEN || '';

module.exports = axios.create({
    baseURL: 'https://www.eventbriteapi.com/v3/events',
    headers: {
        Authorization: `Bearer ${EVENTBRITE_TOKEN}`
    }
});