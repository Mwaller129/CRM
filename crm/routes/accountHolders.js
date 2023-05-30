var express = require('express');
var router = express.Router();

const accountHoldersCtrl = require('../controllers/accountHolders');



router.get('/', accountHoldersCtrl.index);
router.get('/accountHolders/clients', accountHoldersCtrl.show);
router.post('/accountHolders/clients/new', accountHoldersCtrl.create);




module.exports = router;


