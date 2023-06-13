const http = require('http');
const server = http.createServer();
const mongoose = require('mongoose');

server.on('request', (req, res) => {
    res.end('OK');
});

server.listen(3000, 'localhost', () => console.log('started...'));