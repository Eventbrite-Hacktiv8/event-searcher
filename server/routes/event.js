const router = require('express').Router();
const EventController = require('../controllers/event');

router.get('/', EventController.getAllEvents);

router.get('/search/', EventController.filter);

router.get('/:UserId', EventController.getUserEvents);

router.post('/', EventController.saveEvent);



module.exports = router;