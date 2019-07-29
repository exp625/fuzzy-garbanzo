var querystring = require('querystring');
var request = require('request');

var session = require('express-session');

var spotify_app_scope = 'user-read-private user-read-email user-modify-playback-state user-read-playback-state';
var redirect_uri = process.env.REDIRECT_URI;
var spotify_client_id = process.env.SPOTIFY_CLIENT_ID;
var spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET;

exports.auth = function () {
    console.log("Auth");
    return true
};

exports.spotifyLogin = function (req, res, next) {
    res.jsonp({'url': 'https://accounts.spotify.com/authorize?' +
            querystring.stringify({
                response_type: 'code',
                client_id: spotify_client_id,
                scope: spotify_app_scope,
                redirect_uri: redirect_uri,
                state: req.session.id})});
};

exports.spotifyCallback = function (req, res, next) {

    var code = req.query.code || null;
    var state = req.query.state || null;
    var sess = req.session;

    var auth_options = {
        url: 'https://accounts.spotify.com/api/token',
        form: {
            code: code,
            redirect_uri: redirect_uri,
            grant_type: 'authorization_code'
        },
        headers: {
            'Authorization': 'Basic ' + (new Buffer(spotify_client_id + ':' + spotify_client_secret).toString('base64'))
        },
        json: true
    };

    request.post(auth_options, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            sess.spotify_access_token = body.access_token;
            sess.spotify_refresh_token = body.refresh_token;
            sess.spotify_valid_until = body.expires_in * 1000 + Date.now();
            sess.user_type = 'Host';
            sess.save();
            res.redirect('');
        } else {
            next(new Error(error));
        }
    });

};

exports.spotifyRefreshToken = function(party) {

    if(!(party.spotify_access_token && party.spotify_refresh_token)) {
        next(new Error('Spotify Auth: Invalid Session'))
    }
    console.log("Trying to get new Spotify Auth Token");

    // requesting access token from refresh token
    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: { 'Authorization': 'Basic ' + (new Buffer(spotify_client_id + ':' + spotify_client_secret).toString('base64')) },
        form: {
            grant_type: 'refresh_token',
            refresh_token: party.spotify_refresh_token
        },
        json: true
    };

    request.post(authOptions, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            console.log("Got new Spotify Auth Token");
            party.session.spotify_access_token = body.access_token;
            party.session.spotify_valid_until = body.expires_in * 1000 + Date.now();
            party.spotify_access_token = body.access_token;
            party.spotify_valid_until = body.expires_in * 1000 + Date.now();
            party.session.save()
        } else {
            console.log(error);
        }
    });
};

exports.getUserStatus = function (req, res, next) {
  if(!req.session.user_type) {
      res.jsonp({"user": "New", "label": ""})
  } else {
      if (req.session.user_type === "Guest") {
          res.jsonp({"user": "Guest", "label": req.session.label})
      }
      else if (req.session.user_type === "Host") {
          res.jsonp({"user": "Host", "label": req.session.label})
      }
  }



};