const router = require('express').Router();
const EventController = require('../controllers/event');

router.get('/', EventController.getAllEvents);

router.post('/', EventController.saveEvent);

router.get('/search/', EventController.filter);

router.get('/categories', EventController.categories)

module.exports = router;