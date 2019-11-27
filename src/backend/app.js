const express = require('express');
const app = express();
const path = require('path');
const port = process.env.PORT || 3001;
const getMovies = require('./movies');

//api for movies
app.get('/rest/movies', (req, res) => {
    //let movies = getMovies();
    res.send(getMovies());
});

app.use(express.static(path.join(__dirname, '../../build')));

app.get('/', (req, res) => res.send('Hello backend welcome back'));
app.listen(port, () => console.log(`Example ${port}`));

app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});

