// var http = require('http');
// var server = http.createServer(function(req, res) {
//     res.writeHead(200, {'Content-Type': 'text/plain'});
//     var message = 'It works!\n',
//         version = 'NodeJS ' + process.versions.node + '\n',
//         response = [message, version].join('\n');
//     res.end(response);
// });
// server.listen();

const express = require('express');
const app = express();

app.configure(function() {
    app.use(express.static(__dirname))
})

app.get('/', (req, res) => {
    res.send('test');
})

app.get('/script', (req, res) => {
  const username = req.query.username;
  if (username === 'test') {
    res.send('true');
  } else {
    res.send('false');
  }
});

app.listen();