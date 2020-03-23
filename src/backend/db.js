const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

//const url = 'mongodb://Nico:Nico1216@localhost:27017/kodflix';
const url = 'mongodb+srv://Nico:Nico1216@cluster0-hr8ag.mongodb.net/test?retryWrites=true&w=majority';

module.exports = { connect };

function connect() {
	return new Promise((resolve, reject) => {
		MongoClient.connect(url, function (err, client) {
			assert.equal(null, err);
			console.log('Connected successfully to server');
			const dbo = client.db('kodflix');
			resolve(dbo);
		});
	})
}
