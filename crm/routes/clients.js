const express = require('express');
const router = express.Router();
const clientsCtrl = require('../controllers/clients');
const ensureLoggedIn = require('../config/ensureLoggedIn');

router.get('/', ensureLoggedIn, clientsCtrl.index);
router.get('/new', ensureLoggedIn, clientsCtrl.new);
router.get('/:id', ensureLoggedIn, clientsCtrl.show);
router.post('/', ensureLoggedIn, clientsCtrl.create);
router.delete('/:id', ensureLoggedIn, clientsCtrl.delete);

module.exports = router;