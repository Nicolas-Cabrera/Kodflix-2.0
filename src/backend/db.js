// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
// require('dotenv').config();

// const url = process.env.NODE_ENV === 'production' ? 
// 	process.env.DB_URL_PRD : 
// 	process.env.DB_URL_DEV;
// const dbName = process.env.NODE_ENV === 'production' ?
// 	'heroku_zb8xzspg' : 
// 	'kodflix';

// module.exports = { connect };

// function connect() {
// 	return new Promise((resolve, reject) => {
// 		MongoClient.connect(url, function (err, client) {
// 			assert.equal(null, err);
// 			console.log('Connected successfully to server');
// 			const dbo = client.db(dbName);
// 			resolve(dbo);
// 		});
// 	})
// }
