const express = require('express');
const app = express();
var engines = require('consolidate');

app.engine('html', engines.mustache);
app.set('view engine', 'html');


var fonction = require('./app/routes');
fonction(app);
app.listen(9292);