import React, { useState, useEffect } from 'react';
import '../frontend/App.css';
import Details from '../frontend/Details/Details';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './Gallery';
import notFound from './NotFound';

function App() {

  let [movies, setMovies] = useState();

  useEffect(() => {
    fetch('/rest/movies')
        .then(response => response.json())
        .then(movies => setMovies(movies))
  }, []);

  return (
    <Router>
      {/* <h3>Titles</h3>
      {
        movies ? movies.map(movie => {
           return <div>Name: {movie.name}</div>
         }) :
         <div>No data</div>
      } */}
      <Switch>
        <div className="App">
          <Route exact path='/' component={Gallery} />
          <Route exact path='/NotFound' component={notFound} />
          <Route exact path='/:movieId' component={Details} />
        </div>
      </Switch>
    </Router>
  );
}

export default App;
