var express = require('express');
var router = express.Router();

const accountHoldersCtrl = require('../controllers/accountHolders');



router.get('/', accountHoldersCtrl.index);
router.get('/:id', accountHoldersCtrl.show);
router.post('/new', accountHoldersCtrl.create);




module.exports = router;


