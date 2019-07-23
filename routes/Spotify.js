var express = require('express');
var router = express.Router();

var authController = require('../controllers/SpotifyController');

router.use(function (req, res, next) {

    next();

    router.get('/play', function (req, res, next) {
        authController.spotifyStartPlayback(req, res, next);
    });

    router.get('/stop', function (req, res, next) {
        authController.spotifyStopPlayback(req, res, next);
    });

    router.get('/search', function (req, res, next) {
        authController.spotifySearch(req, res, next)
    });

    router.get('/play', function (req, res, next) {
        authController.spotifyPlaySong(req, res, next);
    })
});

module.exports = router;