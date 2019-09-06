const router = require('express').Router();
const eventRouter = require('./event');
const categoryRouter = require('./category');

router.use('/events', eventRouter);
router.use('/categories', categoryRouter);

module.exports = router;