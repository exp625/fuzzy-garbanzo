var express = require('express');
var router = express.Router();

var partyController = require('../controllers/PartyController');

router.use(function (req, res, next) {

    next();

    router.get('/create', function (req, res, next) {
        partyController.createParty(req, res);
    });

});

module.exports = router;