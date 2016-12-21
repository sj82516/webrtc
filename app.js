const express = require('express');
const app = express();
const fs = require('fs');

const ssl = {
    key: fs.readFileSync('./ssl/yuanchieh.com.key', 'utf8'),
    cert: fs.readFileSync('./ssl/yuanchieh.com.crt', 'utf8'),
    ca: [fs.readFileSync('./ssl/gdig2_bundle.crt', 'utf8')]
};

const server = require('https').createServer(ssl, app);
const io = require('socket.io')(server);

app.use(express.static(__dirname + '/'));
app.get('/', function (req, res, next) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (client) {
    console.log('Client connected...');

    client.on('candidate', function(data){
        "use strict";
        console.log(data);
        client.broadcast.emit('msg', data);
    });

    client.on('sdp', function(data){
        "use strict";
        console.log(data);
        client.broadcast.emit('msg', data);
    });
});

server.listen(4200, ()=> {
    "use strict";
    console.log('server start at 4200');
});