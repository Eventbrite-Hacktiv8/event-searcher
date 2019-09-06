const router = require('express').Router();
const eventRouter = require('./event');
const categoryRouter = require('./category');
const user = require('./user')

router.use('/user', user)
router.use('/events', eventRouter);
router.use('/categories', categoryRouter);

module.exports = router;