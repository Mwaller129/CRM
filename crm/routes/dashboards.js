var express = require('express');
var router = express.Router();

const dashboardsCtrl = require('../controllers/dashboards');



//router.post('/dashboards/clients/new', dashboardsCtrl.create);
router.get('/', dashboardsCtrl.index);
//router.get('dashboards/clients', dashboardsCtrl.show);




module.exports = router;


