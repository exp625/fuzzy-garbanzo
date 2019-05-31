var express = require('express');
var router = express.Router();

var queueController = require('../controllers/QueueController');
var authController = require('../controllers/AuthController');

router.use(function (req, res, next) {

    if (authController.auth(req)) {
        next();
    } else {
        next(new Error('Bad Request'));
    }

    router.get('/', function (req, res) {
        queueController.getQueue(req, res);
    });

    router.post('/', function (req, res) {
        queueController.vote(req, res);
    });
});

module.exports = router;