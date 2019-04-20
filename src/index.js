const  express = require('express');

const config = require('./server/config.js');

// database
require('./database.js');


// init server
const app = config(express());


app.listen(app.get('port'), () => {
	console.log('Server', app.get('port'));
});