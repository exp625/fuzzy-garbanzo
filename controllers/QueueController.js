class QueueController{

    constructor() {
        this.queues = [];
        this.count = 0;
    }

    generateNewQueue() {

    }

    getQueue() {
        this.count++;
        return this.count;
    }


}

var queueController = new QueueController();

exports.getQueue = function (req, res) {
    console.log(req.session.id);
    console.log(req.session.spotify_access_token);
  res.jsonp(req.session.spotify_auth_token);
};

exports.vote = function (req, res) {
    res.jsonp("Vote");
};