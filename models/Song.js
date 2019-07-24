exports.QueueSong = class {

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