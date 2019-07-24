require('../models/Song');


exports.Queue = class{

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