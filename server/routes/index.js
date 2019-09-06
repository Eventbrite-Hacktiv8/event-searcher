const router = require('express').Router();
const eventRouter = require('./event');
const categoryRouter = require('./category');
const user = require('./user')
const weather = require('./weather')

router.use('/user', user)
router.use('/events', eventRouter);
router.use('/categories', categoryRouter);
router.use('/weather', weather);

module.exports = router;