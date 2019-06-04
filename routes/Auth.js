var express = require('express');
var router = express.Router();

var authController = require('../controllers/AuthController');

router.use(function (req, res, next) {

    next();

    router.get('/login', function (req, res, next) {
        authController.spotifyLogin(req, res, next);
    });

    router.get('/callback', function (req, res, next) {
        authController.spotifyCallback(req, res, next);
    });

    router.get('/refresh', function (req, res, next) {
        authController.spotifyRefreshToken(req, res, next)
    });

    router.get('/status', function (req, res, next) {
        authController.getUserStatus(req, res, next);
    })
});

module.exports = router;