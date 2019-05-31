var express = require('express');
var app = express();

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

var queue = require('./routes/Queue');
app.use('/api/queue', sessionHandler, queue);

var auth = require('./routes/Auth');
app.use('/auth/', sessionHandler, auth);

app.use(function(error, req, res, next) {
    res.json({ message: error.message });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});