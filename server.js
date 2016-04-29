var express = require('express');
var serveStatic = require('serve-static');
var app = express();

app.set('port', (process.env.PORT || 5000));

app.use(serveStatic(__dirname)).listen(app.get('port'), function () {
    console.log('Server running on ' + app.get('port') + '...');
});

app.get('/', function(request, response) {
    response.render('index.html');
});
