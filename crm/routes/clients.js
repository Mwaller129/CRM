const express = require('express');
const router = express.Router();
const clientsCtrl = require('../controllers/clients');

router.get('/accountHolders/clients/new', clientsCtrl.new);
router.post('/accountHolders/clients', clientsCtrl.create);

module.exports = router;