const express = require('express');
const router = express.Router();
const activitiesCtrl = require('../controllers/activities');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/activities/new', ensureLoggedIn, activitiesCtrl.new);
router.post('/clients/:id/activities', ensureLoggedIn, activitiesCtrl.create);

module.exports = router;