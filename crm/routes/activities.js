const express = require('express');
const router = express.Router();
const activitiesCtrl = require('../controllers/activities');

router.get('/accountHolders/activities/new', activitiesCtrl.new);
router.post('/accountHolders/activities', activitiesCtrl.create);

module.exports = router;