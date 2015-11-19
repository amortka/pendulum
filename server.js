var express = require('express');

var app = express();
var port = process.env.port || 9080;

var api = require('./api/api');

app.use('/', express.static(__dirname + '/app'));
app.use('/api', api);

var server = app.listen(port, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});