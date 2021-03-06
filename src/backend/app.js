const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;
const db = require('./db');

db.connect().then(dbo => {

	app.get('/rest/movies', (req, res) => {
		dbo.collection('shows').find({}).toArray((err, results) => {
			if(err) throw err;
			res.send(results);
		});
	});

	app.get('/rest/movies/:id', (req, res) => {
		dbo.collection('shows').findOne({ id: req.params.id }, (err, results) => {
			if(err) throw err;
			res.send(results);
		})
	})

	app.use(express.static(path.join(__dirname, '../../build')));

	app.get('/', (req, res) => res.send('Hello backend welcome back sir!'));
	app.listen(port, () => console.log(`Example ${port}`));

	app.get('*', function (req, res) {
		res.sendFile(path.join(__dirname, '../../build', 'index.html'));
	});
});
