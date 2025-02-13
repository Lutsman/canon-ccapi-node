const express = require('express');//call express module
const app = express();
const request = require('request');// call the request module
const path = require('path');// call the path modeule
const cors = require('cors');


const config = require('./config');
const ccapi = require('./routes/ccapi');
const interval = require('./routes/interval');

//Build other app variables
var port = 3000;

app.use(cors());

//MAIN PAGE
app.use('/', express.static(path.join(__dirname, 'html')));

//BASIC COMMANDS CCAPI
app.use('/connect', ccapi.connect);

//BASIC COMMANDS INTERVAL
app.use('/status', interval.getStatus);
app.use('/test', interval.test);


//INTERVAL SHOOTING
app.use('/interval/:shots/:wait/:delay', interval.intervalShooting);
app.use('/interval/stop', interval.stopInterval);


//APP PORT
app.listen(port, function(){
	console.log('Listening on port 3000...');
});
