const express = require('express');
const router = express.Router();
const clientsCtrl = require('../controllers/clients');

router.get('/clients', clientsCtrl.index);
router.get('/clients/new', clientsCtrl.new);
router.get('/:id', clientsCtrl.show);
router.post('/clients', clientsCtrl.create);
router.delete('/clients/:id', clientsCtrl.delete);

module.exports = router;