var request = require('request');
var partyController = require('../controllers/PartyController');

const spotify_uri = 'https://api.spotify.com/v1/me/player';

exports.spotifyStartPlayback = function (req, res, next) {
    if (req.session.label) {
        try {
            console.log(req.session.label);
            console.log(partyController.getObject());
            var party = partyController.getParty(req.session.label);
            console.log(party);
            var spotify_access_token = party.getSpotifyAccessToken();
            console.log(spotify_access_token);
            var device_id = party.getSelectedDeviceId();
            console.log(device_id);
        } catch (e) {
            next(new Error('Party Error: Could not find Party with your label'));
            return;
        }
    } else {
        next(new Error('Party Error: Could not find a selected label'));
        return;
    }

    const payload = {'device_id': device_id};
    const options = {
        url: spotify_uri + '/play',
        headers: { 'Authorization': 'Bearer ' + spotify_access_token },
        body: payload,
        json: true
    };
    request.put(options, function (error, response, body) {
        if (!error) {
            res.send(body)
        } else {
            next(new Error('Spotify Error: Could not call the Spotify Api'))
        }

    })
};

exports.spotifyStopPlayback = function (req, res, next) {

};

exports.spotifySearch = function (req, res, next) {

};

exports.spotifyPlaySong = function (req, res, next) {

};