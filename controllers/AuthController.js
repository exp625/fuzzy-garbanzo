var querystring = require('querystring');
var request = require('request');

var session = require('express-session');

var spotify_app_scope = '';

var redirect_uri = process.env.REDIRECT_URI;
var spotify_client_id = process.env.SPOTIFY_CLIENT_ID;
var spotify_client_secret = process.env.SPOTIFY_CLIENT_SECRET;

exports.auth = function () {
    console.log("Auth");
    return true
};

exports.spotifyLogin = function (req, res, next) {
    res.redirect('https://accounts.spotify.com/authorize?' +
        querystring.stringify({
            response_type: 'code',
            client_id: spotify_client_id,
            scope: spotify_app_scope,
            redirect_uri: redirect_uri,
            state: req.session.id
        }));
};

exports.spotifyCallback = function (req, res, next) {

    // TODO: Check state
    var code = req.query.code || null;
    var state = req.query.state || null;
    var sess = req.session;

    console.log("State " +  state);
    console.log("Session ID" + sess.id);
    console.log(JSON.stringify(res.sessionStore));
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

    request.post(auth_options, function(error, response, body) {
        if (!error && response.statusCode === 200) {

            console.log('Access_Token: ' + body.access_token);
            console.log('Request_Token: ' + body.refresh_token);
            console.log('Session: ' + sess);
            sess.spotify_access_token = body.access_token;
            sess.spotify_refresh_token = body.refresh_token;
            sess.user_type = 'Host';
            sess.save();


            // we can also pass the token to the browser to make requests from there
            res.redirect('/login/' +
                querystring.stringify({
                    access_token: body.access_token,
                    refresh_token: body.refresh_token,
                    user_type: 'Host'
                }));
        } else {
            next(new Error('Spotify Auth: Invalid Token'));
        }
    });

};

exports.spotifyRefreshToken = function(req, res, next) {

    if(!(req.session.spotify_access_token && req.session.spotify_refresh_token)) {
        next(new Error('Spotify Auth: Invalid Session'))
    }

    // requesting access token from refresh token
    var refresh_token = req.query.refresh_token;
    var authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: { 'Authorization': 'Basic ' + (new Buffer(spotify_client_id + ':' + spotify_client_secret).toString('base64')) },
        form: {
            grant_type: 'refresh_token',
            refresh_token: refresh_token
        },
        json: true
    };

    request.post(authOptions, function(error, response, body) {
        if (!error && response.statusCode === 200) {
            var access_token = body.access_token;
            res.send({
                'access_token': access_token
            });
        }
    });
};

exports.getUserStatus = function (req, res, next) {
  if(!req.session.user_type) {
      res.jsonp({"User": "New", "PartyID": ""})
  } else {
      if (req.session.user_type === "Guest") {
          res.jsonp({"User": "Guest", "PartyID": req.session.party_id})
      }
      if (req.session.user_type === "Host") {
          res.jsonp({"User": "Host", "PartyID": req.session.party_id})
      }
  }

  next(new Error('Auth Error: Invalid Session'));


};