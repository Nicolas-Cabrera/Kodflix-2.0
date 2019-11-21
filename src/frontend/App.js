import React from 'react';
import '../frontend/App.css';
import Details from '../frontend/Details/Details';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './Gallery';
import notFound from './NotFound';

function App() {
  return (
    <Router>
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
