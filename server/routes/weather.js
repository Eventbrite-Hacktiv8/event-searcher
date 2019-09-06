const router = require('express').Router();
const controller = require('../controllers/weather');


router.post('/getWeather',controller.getWheather)

module.exports = router;