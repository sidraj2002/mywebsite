var express = require('express');
var app = express();
app.use('/', express.static(__dirname ));
app.listen(8002, function() {
   console.log('listening');
 });
