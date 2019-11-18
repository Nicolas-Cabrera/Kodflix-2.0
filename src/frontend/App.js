import React from 'react';
import '../frontend/App.css';
import Details from '../frontend/Details/Details';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Gallery from './Gallery';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Welcome to Kodflix</h1>
        <Gallery />
        {/* <Route exact path='/' component={} /> */}
        <Route exact path='/details' component={Details} />
      </div>
    </Router>
  );
}

export default App;
