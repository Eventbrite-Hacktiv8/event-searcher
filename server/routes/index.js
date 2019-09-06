const router = require('express').Router();
const eventRouter = require('./event');
<<<<<<< HEAD
const categoryRouter = require('./category');
=======
const user = require('./user')
>>>>>>> adcd93c6018c6a66b387e5b4cfd0b288def978f0

router.use('/user', user)
router.use('/events', eventRouter);
router.use('/categories', categoryRouter);

module.exports = router;