require('../models/Queue');

exports.Party = class{

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