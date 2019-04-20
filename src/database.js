const mongose = require('mongoose');

const { database } = require('./keys.js');

mongose.connect(database.URI, {
	useNewUrlParser: true
})
.then(db => console.log('DB is connected'))
.catch(err => console.error(err))