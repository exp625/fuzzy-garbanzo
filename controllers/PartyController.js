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

    getObjectWithoutId() {
        return {'spotifyTrackFull': this.spotifyTrackFull, 'votes': this.getVoteCount()};
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
            if (a.getVoteCount() > b.getVoteCount()) return 1;
            if (a.getVoteCount() < b.getVoteCount()) return -1;
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

    getObjectWithoutId() {
        return this.songs.map(song => {
            return song.getObjectWithoutId();
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
        this.playbackState = true;
    }

    getLabel() {
        return this.label;
    }

    getSpotifyAccessToken() {
        return this.spotify_access_token;
    }

    getSelectedDeviceId() {
        return '';
    }

    getQueue() {
        return this.queue;
    }

    getCurrentSong() {
        return this.currentSong;
    }

    startNextSong () {
        console.log("Start Next Song");
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
                console.log("Started New Song");
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
        console.log(party);
        req.session.label = party.getLabel();
        req.session.save();
        this.partys.push(party);
        res.jsonp({'label' : party.getLabel()});
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
        console.log("Queue Worker");
        this.partys.forEach(party => {
            const options = {
                url: 'https://api.spotify.com/v1/me/player',
                headers: { 'Authorization': 'Bearer ' + party.spotify_access_token },
                json: true
            };
            request.get(options, function (error, response, body) {
                console.log(JSON.stringify(body));
                console.log(party.playbackState);
                console.log(body.progress_ms);
                if (party.playbackState) {
                    if (body.progress_ms > body.item.duration_ms - 1000) {
                        party.startNextSong();
                    }
                }
            });
        });

    }


}

var partyController = new PartyController();

exports.getParty = function (label) {
    var party = partyController.getParty(label);
    console.log(party);
    return party;
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
    try {
        const party = partyController.getParty(label);
        const queue = party.getQueue();
        res.send(queue.getObjectWithoutId());
    } catch (e) {
        next(new Error('Party Error: Could not find a party with the submitted label'))
    }

};

exports.vote = function (req, res, next) {
    const label = req.session.label;
    const id = req.session.id;
    try {
        const party = partyController.getParty(label);
        const queue = party.getQueue();
        const spotifyTrackFull = req.body;
        queue.vote(id, spotifyTrackFull);
        res.send(queue.getObjectWithoutId());
    } catch (e) {
        next(new Error('Party Error: Could not find a party with the submitted label'))
    }

};

exports.setQueue = function (req, res, next) {

};

exports.setSettings = function (req, res, next) {

};

exports.getStatus = function (req, res, next) {

};

exports.setSettings = function (req, res, next) {

};

exports.socketAuth = function (handshakeData, accept) {
    console.log(handshakeData.session.user_type);
    console.log(handshakeData.session.label);

  if (handshakeData.session.user_type === 'Host' || handshakeData.session.user_type === 'Guest') {
      if (partyController.getParty(handshakeData.session.label)) {
          console.log("Accept Connection");
          accept(null, true);
      } else {
          return accept('Label is invalid.', false);
      }
  } else {
      return accept('Wrong user type', false);

  }
};

exports.socketConnect = function (socket) {
    console.log("Someone connected");
    var label = socket.handshake.label;
    socket.join(label);
};

exports.setSocket = function (socket) {
    partyController.setSocket(socket);
};
