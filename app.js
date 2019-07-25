var express = require('express');
var app = express();
var http = require('http').Server(app);

var path = require('path');
var logger = require('morgan');
app.use(logger('dev'));
var cors = require('cors');
app.use(cors());
app.use(express.json());

var partyController = require('./controllers/PartyController');

// Session Coockies TODO: Security
var session = require('express-session');
var MemoryStore = require('memorystore')(session);
var sessionHandler = session({
    secret: 'keyboard cat',
    store: new MemoryStore({
        checkPeriod: 86400000 // prune expired entries every 24h
    }),
    cookie: {}
});

// Socket.io
var io = require('socket.io')(http);
var sharedsession = require("express-socket.io-session");
io.use(sharedsession(session, {
    autoSave: true
}));

//io.set('authorization', partyController.socketAuth);
//io.on('connection', partyController.socketConnect);
io.on('connection', function (socket) {
    socket.on('my other event', function (data) {
        console.log(data);
    });
});
partyController.setSocket(io);


var queue = require('./routes/Queue');
app.use('/api/queue', sessionHandler, queue);

var party = require('./routes/Party');
app.use('/api/party', sessionHandler, party);

var auth = require('./routes/Auth');
app.use('/api/auth', sessionHandler, auth);

var spotify = require('./routes/Spotify');
app.use('/api/spotify', sessionHandler, spotify);

const allowedExt = [
    '.js',
    '.ico',
    '.css',
    '.png',
    '.jpg',
    '.woff2',
    '.woff',
    '.ttf',
    '.svg',
];
app.get('*', (req, res) => {
    if (allowedExt.filter(ext => req.url.indexOf(ext) > 0).length > 0) {
        res.sendFile(path.resolve(`./public/dist/public/${req.url}`));
    } else {
        res.sendFile(path.resolve('./public/dist/public/index.html'));
    }
});

app.use(function(error, req, res, next) {
    res.json({ message: error.message });
});

http.listen(3000, () => {
    console.log('Jam Factory running on port 3000!');
});