const express = require('express')
const router = express.Router()
const calendarRoute = require('./calendar')
router.use('/',calendarRoute)


module.exports = router