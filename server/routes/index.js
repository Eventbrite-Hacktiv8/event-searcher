const router = require('express').Router();
const eventRouter = require('./event');

router.use('/events', eventRouter);

module.exports = router;