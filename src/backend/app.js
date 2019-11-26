const express = require('express');
const app = express();
const port = 3001;
const getMovies = require('./movies');

app.get('/', (req, res) => res.send('Hello backend welcome back Nicolas'));
app.listen(port, () => console.log(`Example ${port}`));

//api for movies
app.get('/rest/movies', (req, res) => {
    //let movies = getMovies();
    res.send(getMovies());
});

app.get('/rest/movies/:id', (req, res) => {
    // let movie = getMovies();
    res.send(getMovies(req.params.id));
});
