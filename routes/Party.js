var express = require('express');
var router = express.Router();

var partyController = require('../controllers/PartyController');

router.use(function (req, res, next) {

    next();

    router.get('/create', function (req, res, next) {
        partyController.createParty(req, res, next);
    });

    router.put('/join', function (req, res, next) {
        partyController.joinParty(req, res, next);
    });

    router.get('/queue', function (req, res, next) {
        partyController.getQueue(req, res, next);
    });

    router.put('/vote', function (req, res, next) {
        partyController.vote(req, res, next);
    });

    router.put('/settings', function (req, res, next) {
        partyController.setSettings(req, res, next);
    });



});

module.exports = router;