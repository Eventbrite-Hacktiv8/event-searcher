const router = require('express').Router();
const eventRouter = require('./event');
const user = require('./user')

router.use('/user', user)
router.use('/events', eventRouter);

module.exports = router;