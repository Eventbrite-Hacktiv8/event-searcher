const router = require('express').Router();
const controller = require('../controllers/user');

router.post('/signin',controller.signIn)

module.exports = router;