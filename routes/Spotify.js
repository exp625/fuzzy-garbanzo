var express = require('express');
var router = express.Router();

var authController = require('../controllers/SpotifyController');

router.use(function (req, res, next) {

    next();

    router.put('/play', function (req, res, next) {
        authController.spotifyStartPlayback(req, res, next);
    });

    router.get('/pause', function (req, res, next) {
        authController.spotifyStopPlayback(req, res, next);
    });

    router.put('/search', function (req, res, next) {
        authController.spotifySearch(req, res, next)
    });

    router.get('/devices', function (req, res, next) {
        authController.spotifyDeviceIds(req, res, next)
    });

    router.get('/playlist', function (req, res, next) {
        authController.spotifyPlaylists(req, res, next)
    });

});

module.exports = router;