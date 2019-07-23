class Queue{

    constructor(){
        this.songs = [];
    }
}

class Party{

    constructor(label, spotify_access_token){
        this.label = label;
        this.spotify_access_token = spotify_access_token;
        this.queue = new Queue();
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
}


class PartyController{

    constructor() {
        this.partys = [];
        this.count = 0;

    }

    generateNewParty(req, res) {
        var party = new Party(this.generateRandomLabel(), req.session.spotify_access_token);
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


}

var partyController = new PartyController();

exports.getParty = function (label) {
    var party = partyController.getParty(label);
    console.log(party);
    return party;
};

exports.createParty = function (req, res) {
    if (req.session.user_type === 'Host' && req.session.spotify_access_token) {
        partyController.generateNewParty(req, res)
    }
};

exports.getObject = function () {
    return partyController;
};

exports.getQueue = function (req, res) {

};

exports.vote = function (req, res) {

};

exports.setQueue = function (req, res) {

};

