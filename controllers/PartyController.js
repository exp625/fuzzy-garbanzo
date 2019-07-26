var request = require('request');

class QueueSong{

    constructor(SpotifyTrackFull) {
        this.spotifyTrackFull = SpotifyTrackFull;
        this.votes = [];
        this.date = Date.now();
    }

    getVoteCount() {
        return this.votes.length;
    }

    getDate() {
        return this.date;
    }

    getSpotifyTrackFull() {
        return this.spotifyTrackFull;
    }

    vote(id) {
        if (this.votes[this.votes.indexOf(id)]) {
            // The id has already voted for the song. Another vote will remove the current vote
            this.votes = this.votes.filter(value => {
                return !(value === id);
            });
        } else {
            // The id has currently not voted for the song. Add the vote
            this.votes.push(id);
        }
    }

    checkForVote(id) {
        return this.votes.includes(id);
    }

    getObjectWithoutId(id) {
        return {'spotifyTrackFull': this.spotifyTrackFull, 'votes': this.getVoteCount(), 'voted': this.checkForVote(id)};
    }
}

class Queue{

    constructor() {
        this.songs = [];
    }

    vote(id, spotifyTrackFull) {
        let notInQueueFlag = true;
        this.songs.forEach(song => {
            if (song.getSpotifyTrackFull().uri === spotifyTrackFull.uri) {
                song.vote(id);
                notInQueueFlag = false;
            }
        });

        if (notInQueueFlag) {
            let newSong = new QueueSong(spotifyTrackFull);
            newSong.vote(id);
            this.songs.push(newSong);
        }

        this.checkForEmptySongs();
        this.sortQueue();
    }

    checkForEmptySongs () {
        this.songs = this.songs.filter(song => {
            return song.getVoteCount() > 0;
        });
    }

    sortQueue() {
        this.songs.sort((a, b) => {
            if (a.getVoteCount() > b.getVoteCount()) return -1;
            if (a.getVoteCount() < b.getVoteCount()) return 1;
            if (a.getDate() > b.getDate()) return 1;
            if (a.getDate() < b.getDate()) return -1;
            return 0;
        });
    }

    getNextSong(remove) {
        if (remove) {
            return this.songs.shift()
        } else {
            return this.songs[0];
        }
    }

    getObjectWithoutId(id) {
        return this.songs.map(song => {
            return song.getObjectWithoutId(id);
        });
    }
}

class Party{

    constructor(label, spotify_access_token, socket){
        this.label = label;
        this.spotify_access_token = spotify_access_token;
        this.queue = new Queue();
        this.socket = socket;
        this.currentSong = undefined;
        this.queueActive = true;
        this.selectedDeviceId = '';
        this.ipVoting = false;
        this.playbackState = undefined;
        this.user = undefined;
    }

    setUser(user) {
        this.user = user;
    }

    getUser() {
        return user;
    }

    getLabel() {
        return this.label;
    }

    getSpotifyAccessToken() {
        return this.spotify_access_token;
    }

    getSelectedDeviceId() {
        return this.selectedDeviceId;
    }

    getQueue() {
        return this.queue;
    }

    setSettings(settings) {
        if(this.selectedDeviceId !== settings.device) {
            const payload = {'device_ids': [settings.device], 'play': true};
            const options = {
                url: 'https://api.spotify.com/v1/me/player',
                headers: {'Authorization': 'Bearer ' + this.spotify_access_token},
                body: payload,
                json: true
            };
            request.put(options, function (error, response, body) {
            });
        }

        this.selectedDeviceId = settings.device;
        this.ipVoting = settings.ip;
    }

    getCurrentSong() {
        return this.currentSong;
    }

    getPlaybackState() {
        return this.playbackState;
    }

    setPlaybackState(state) {
       this.playbackState = state;
    }

    getQueueActive() {
        return this.queueActive;
    }


    setQueueActive(state) {
        let val = 'pause';
        if (state.playback) {
            val = 'play';
        }
        this.queueActive = false;
        const query = {'device_id': this.getSelectedDeviceId()};
        const options = {
            url: 'https://api.spotify.com/v1/me/player/' + val,
            headers: {'Authorization': 'Bearer ' + this.spotify_access_token},
            json: true
        };
        request.put(options, (error, response, body) => {
            setTimeout( () => {
                this.queueActive = state.playback;
            }, 2500);
            const states = this.getPlaybackState();
            try {
                states.is_playing = state.playback;
                this.socket.to(this.getLabel()).emit('playback', {
                    'currentSong': this.getCurrentSong(),
                    'state': this.getPlaybackState()
                });
            } catch (e) {
                
            }
        });
    }

    startNextSong () {
        this.currentSong = this.queue.getNextSong(true);
        if (this.currentSong) {
            const query = {'device_id': this.getSelectedDeviceId()};
            let payload = {'uris': [this.currentSong.getSpotifyTrackFull().uri]};

            const options = {
                url: 'https://api.spotify.com/v1/me/player/play',
                headers: {'Authorization': 'Bearer ' + this.spotify_access_token},
                body: payload,
                json: true
            };
            request.put(options, function (error, response, body) {
            });
        }
    }
}

class PartyController{

    constructor() {
        this.partys = [];
        this.count = 0;
        this.socket = undefined;
        setInterval(() => {
            this.queueWorker()
        }, 1000);

    }

    generateNewParty(req, res) {
        var party = new Party(this.generateRandomLabel(), req.session.spotify_access_token, this.socket);

        const options = {
            url: 'https://api.spotify.com/v1/me',
            headers: {'Authorization': 'Bearer ' + req.session.spotify_access_token},
            json: true
        };
        try {
            request.get(options, (error, response, body) => {
                req.session.label = party.getLabel();
                req.session.save();
                party.setUser(body);
                this.partys.push(party);
                res.jsonp({'label': party.getLabel()});
            });
        } catch (e) {
            res.jsonp({'Error': 'Error while getting user details'});
        }



    }

    generateRandomLabel(){
        var text = '';
        var possible = 'ABCDEFGHJKLMNOPQRSTUVWXYZ123456789';

        for (var i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        var exists = false;
        this.partys.forEach(value => {
            if (value.label === text) {
                exists = true;
            }
        });
        if (exists) {
            return this.generateRandomLabel();
        } else {
            return text;
        }
    }

    getParty(label){
        var party = undefined;
        this.partys.forEach(value => {
            if (value.label === label) {
                party = value
            }
        });

        return party;
    }

    setSocket(partySocket){
        this.socket = partySocket;
    }

    queueWorker() {
        this.partys.forEach(party => {
            const options = {
                url: 'https://api.spotify.com/v1/me/player?device_id=' + party.getSelectedDeviceId() ,
                headers: { 'Authorization': 'Bearer ' + party.spotify_access_token },
                json: true
            };
            request.get(options, (error, response, body)  => {
                party.setPlaybackState(body);
                try {
                    if (party.queueActive && body.item) {
                        if (body.progress_ms > body.item.duration_ms - 1000 || body.is_playing === false) {
                            party.startNextSong();
                            this.socket.to(party.getLabel()).emit('queue', party.getQueue().getObjectWithoutId(undefined));
                            this.socket.to(party.getLabel()).emit('playback', {
                                'currentSong': party.getCurrentSong(),
                                'state': party.getPlaybackState()
                            });
                        }
                    }
                } catch (e) {
                }
            });
        });

    }


}

var partyController = new PartyController();

exports.getParty = function (label) {
    var party = partyController.getParty(label);
    return party;
};

exports.getPartyInfo = function (req, res, next) {
    const label = req.session.label;
    try {
        const party = partyController.getParty(label);
        const user = party.getUser();
        res.jsonp({'id': user.id, 'display_name': user.display_name});

    } catch (e) {
        next(new Error('Party Error: Could not find a party with the submitted label'))
    }
};

exports.createParty = function (req, res, next) {
    if (req.session.user_type === 'Host' && req.session.spotify_access_token) {
        partyController.generateNewParty(req, res)
    }
};

exports.joinParty = function (req, res, next) {
    const label = req.body.label;
    try {
        var party = partyController.getParty(label);
        req.session.user_type = 'Guest';
        req.session.label = label;
        req.session.save();
        req.jsonp({'label' : label})
    } catch (e) {
        next(new Error('Party Error: Could not find a party with the submitted label'))
    }
};

exports.getQueue = function (req, res, next) {
    const label = req.session.label;
    let id = req.session.id;
    try {
        const party = partyController.getParty(label);
        const queue = party.getQueue();
        if (party.ipVoting) {
            id = req.ip;
        }
        res.send(queue.getObjectWithoutId(id));
    } catch (e) {
        next(new Error('Party Error: Could not find a party with the submitted label'))
    }

};

exports.vote = function (req, res, next) {
    const label = req.session.label;
    let id = req.session.id;
    try {
        const party = partyController.getParty(label);
        const queue = party.getQueue();
        const spotifyTrackFull = req.body;
        if (party.ipVoting) {
            id = req.ip;
        }
        queue.vote(id, spotifyTrackFull);
        res.send(queue.getObjectWithoutId(id));
        partyController.socket.to(party.getLabel()).emit('queue', party.getQueue().getObjectWithoutId(id));

    } catch (e) {
        next(new Error('Party Error: Could not find a party with the submitted label'))
    }

};

exports.setQueue = function (req, res, next) {

};

exports.setSettings = function (req, res, next) {
    const label = req.session.label;
    const id = req.session.id;
    try {
        const party = partyController.getParty(label);
        party.setSettings(req.body);
        res.jsonp({'Settings': 'Saved'});
    } catch (e) {
        next(new Error('Party Error: Could not find a party with the submitted label'))
    }
};

exports.getStatus = function (req, res, next) {
    const label = req.session.label;
    try {
        const party = partyController.getParty(label);
        res.jsonp({'currentSong': party.getCurrentSong(), 'state': party.getPlaybackState()});
    } catch (e) {
        next(new Error('Party Error: Could not find a party with the submitted label'))
    }
};

exports.setPlayback = function (req, res, next) {
    const label = req.session.label;
    try {
        const party = partyController.getParty(label);
        party.setQueueActive(req.body);
        res.jsonp({'Settings': 'Saved'});
    } catch (e) {
        next(new Error('Party Error: Could not find a party with the submitted label'))
    }
};

exports.addPlaylist = function (req, res, next) {
    const label = req.session.label;
    const user = req.session.user_type;
    if (user === 'Host') {
        try {
            const party = partyController.getParty(label);
            const queue = party.getQueue();
            const playlist = req.body.uri;
            const options = {
                url: 'https://api.spotify.com/v1/playlists/' + playlist + '/tracks',
                headers: {'Authorization': 'Bearer ' + party.getSpotifyAccessToken()},
                json: true
            };
            request.get(options, (error, response, body) => {
                body.items.forEach( track => {
                    queue.vote('Host', track.track);
                });
                partyController.socket.to(party.getLabel()).emit('queue', party.getQueue().getObjectWithoutId());
                res.jsonp({'Status': 'Playlist Added'});
            });

        } catch (e) {
            next(new Error('Party Error: Could not find a party with the submitted label'))
        }
    } else {
        next(new Error('Not allowed'))
    }
};

exports.leaveParty = function (req, res, next) {
    const label = req.session.label;
    if (req.session.user_type === 'Guest') {
        req.session.label = '';
        req.session.user_type = 'New';
        req.session.save();
        res.jsonp({'Success': true});
    } else if (req.session.user_type === 'Host') {
        try {
            var party = partyController.getParty(label);
            req.session.user_type = 'New';
            req.session.label = 'undefined';
            req.session.save();
            party.setQueueActive(false);
            res.jsonp({'Success': true});
        } catch (e) {
            next(new Error('Party Error: Could not find a party with the submitted label'))
        }
    }


};

exports.socketAuth = function (handshakeData, accept) {

  if (handshakeData.session.user_type === 'Host' || handshakeData.session.user_type === 'Guest') {
      if (partyController.getParty(handshakeData.session.label)) {
          accept(null, true);
      } else {
          return accept('Label is invalid.', false);
      }
  } else {
      return accept('Wrong user type', false);

  }
};

exports.socketConnect = function (socket) {

    var label = socket.request.session.label;
    socket.join(label, function () {
    });
};

exports.setSocket = function (socket) {
    partyController.setSocket(socket);
};
