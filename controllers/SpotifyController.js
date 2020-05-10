var request = require('request');
var partyController = require('../controllers/PartyController');

const spotify_connect_uri = 'https://api.spotify.com/v1/me/player';
const spotify_public_uri = 'https://api.spotify.com/v1';

exports.spotifyStartPlayback = function (req, res, next) {
    if (req.session.label) {
        try {
            var party = partyController.getParty(req.session.label);
            var spotify_access_token = party.getSpotifyAccessToken();
            var device_id = party.getSelectedDeviceId();
        } catch (e) {
            next(new Error('Party Error: Could not find Party with your label'));
            return;
        }
    } else {
        next(new Error('Party Error: Could not find a selected label'));
        return;
    }
    const query = {'device_id': device_id};
    let payload;
    if (req.body.uri) {
        payload = {'uris': [req.body.uri]};
    }
    const options = {
        url: spotify_connect_uri + '/play',
        headers: { 'Authorization': 'Bearer ' + spotify_access_token },
        body: payload,
        json: true
    };
    request.put(options, function (error, response, body) {
        if (!error) {
            res.send(body)
        } else {
            next(new Error('Spotify Error: Could not call the Spotify Api'));
        }

    })
};

exports.spotifyStopPlayback = function (req, res, next) {
    if (req.session.label) {
        try {
            var party = partyController.getParty(req.session.label);
            var spotify_access_token = party.getSpotifyAccessToken();
            var device_id = party.getSelectedDeviceId();
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
        url: spotify_connect_uri + '/pause',
        headers: { 'Authorization': 'Bearer ' + spotify_access_token },
        json: true
    };
    request.put(options, function (error, response, body) {
        if (!error) {
            res.jsonp(body)
        } else {
            next(new Error('Spotify Error: Could not call the Spotify Api'));
        }

    })
};

exports.spotifySearch = function (req, res, next) {
    if (req.session.label) {
        try {
            var party = partyController.getParty(req.session.label);
            var spotify_access_token = party.getSpotifyAccessToken();
        } catch (e) {
            next(new Error('Party Error: Could not find Party with your label'));
            return;
        }
    } else {
        next(new Error('Party Error: Could not find a selected label'));
        return;
    }
    const payload = {'q': req.body.text + '*', 'type': 'track', 'market': 'DE'};
    console.log(JSON.stringify(req.body));
    const options = {
        url: spotify_public_uri + '/search' + jsonToQueryString(payload),
        headers: { 'Authorization': 'Bearer ' + spotify_access_token },
        json: true
    };
    request.get(options, function (error, response, body) {
        if (!error) {
            console.log(JSON.stringify(body));
            console.log(JSON.stringify(response));
            res.send(body)
        } else {
            next(new Error('Spotify Error: Could not call the Spotify Api'));
        }
    })
};

exports.spotifyDeviceIds = function (req, res, next) {
    if (req.session.label) {
        try {
            var party = partyController.getParty(req.session.label);
            var spotify_access_token = party.getSpotifyAccessToken();
            var device_id = party.getSelectedDeviceId();
        } catch (e) {
            next(new Error('Party Error: Could not find Party with your label'));
            return;
        }
    } else {
        next(new Error('Party Error: Could not find a selected label'));
        return;
    }
    const options = {
        url: spotify_connect_uri + '/devices',
        headers: { 'Authorization': 'Bearer ' + spotify_access_token },
        json: true
    };
    request.get(options, function (error, response, body) {
        if (!error) {
            res.send(body)
        } else {
            next(new Error('Spotify Error: Could not call the Spotify Api'));
        }
    })

};

exports.spotifyPlaylists = function (req, res, next) {
    if (req.session.label) {
        try {
            var party = partyController.getParty(req.session.label);
            var spotify_access_token = party.getSpotifyAccessToken();
        } catch (e) {
            next(new Error('Party Error: Could not find Party with your label'));
            return;
        }
    } else {
        next(new Error('Party Error: Could not find a selected label'));
        return;
    }
    const options = {
        url: spotify_public_uri + '/me/playlists',
        headers: { 'Authorization': 'Bearer ' + spotify_access_token },
        json: true
    };
    request.get(options, function (error, response, body) {
        if (!error) {
            console.log(JSON.stringify(body));
            res.send(body)
        } else {
            next(new Error('Spotify Error: Could not call the Spotify Api'));
        }
    });

};

function jsonToQueryString(json) {
    return '?' +
        Object.keys(json).map(function (key) {
            return encodeURIComponent(key) + '=' +
                encodeURIComponent(json[key]);
        }).join('&');
}
