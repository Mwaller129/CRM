const express = require('express');
const router = express.Router();
const activitiesCtrl = require('../controllers/activities');

router.get('/dashboards/activities/new', activitiesCtrl.new);
router.post('/dashboards/activities', activitiesCtrl.create);

module.exports = router;