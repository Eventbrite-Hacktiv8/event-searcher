const express = require('express')
const router = express.Router()
const CalendarController = require('../controllers/calendar')

router.post('/event',CalendarController.createEvent)

module.exports = router;