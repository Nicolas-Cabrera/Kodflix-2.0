const express = require('express');
const app = express();
const port = 3001;
const getMovies = require('./movies');

app.get('/', (req, res) => res.send('Hello backend'));
app.listen(port, () => console.log(`Example ${port}`));

//api for movies
app.get('/rest/movies', (rep, res) => {
    //let movies = getMovies();
    res.send(getMovies());
});