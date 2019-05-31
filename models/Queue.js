class Queue {

    constructor(party) {
        this.id = party;
        this.queue = [];
    }

    getId() {
        return this.id;
    }

    getCurrentSong() {
        return this.queue[0];
    }

    getQueue() {
        return this.queue;
    }

}