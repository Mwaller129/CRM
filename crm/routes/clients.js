const express = require('express');
const router = express.Router();
const clientsCtrl = require('../controllers/clients');

router.get('accountHolders/clients', clientsCtrl.index);
router.get('/accountHolders/clients/new', clientsCtrl.new);
router.get('/:id', clientsCtrl.show);
router.post('/accountHolders/clients', clientsCtrl.create);
router.delete('/accountHolders/clients/:id', clientsCtrl.delete);

module.exports = router;