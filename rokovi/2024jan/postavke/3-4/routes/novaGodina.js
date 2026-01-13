const express = require('express');

const router = express.Router();

const controller = require('../controllers/novaGodina');

router.post('/', controller.unesiDelo);
router.get('/', controller.prikaziPocetnuStranicu);
router.get('/kid/:_id', controller.prikaziDete);

module.exports = router;
