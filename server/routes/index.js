const calendarRoute = require('./calendar')
const router = require('express').Router();
const eventRouter = require('./event');
const categoryRouter = require('./category');
const user = require('./user')

router.use('/user', user)
router.use('/events', eventRouter);
router.use('/categories', categoryRouter);
router.use('/calendar',calendarRoute)

module.exports = router;
