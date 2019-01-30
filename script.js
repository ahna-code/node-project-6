'use strict';

var http = require('http');
var fs = require('fs');

var server = http.createServer().listen(8080);

server.on('request', function (request, response) {

    response.setHeader("Content-Type", "text/html; charset=utf-8");

    if (request.method === 'GET' && request.url === '/hello') {
        fs.readFile('./index.html', 'utf-8', function(err, data) {
          if(err) response.write('<h1>Coś poszło nie tak...</h1>');
          else response.write(data);
          response.end();
        })
    } else {
        response.statusCode = 404;
        response.write('<img src="https://cdn.pixabay.com/photo/2015/03/25/13/04/page-not-found-688965__340.png">');
        response.end();
    }
});

