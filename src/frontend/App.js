import React from 'react';
import '../frontend/App.css';
import BreakingB from './Images/breakingbad.jpg';
import CasaDePapel from './Images/casadepapel.jpg';
import HarryPotter from './Images/harrypotter.jpg';
import Insidious from './Images/insidious.jpg';
import Flash from './Images/theflash.jpg';
import Xmen from './Images/xmen.jpg';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Kodflix</h1>
      <div className='container'>
        <div className='item'>Breaking Bad</div>
        <div className='item'>Casa de Papel</div>
        <div className='item'>Harry Potter</div>
      </div>
      <div className='container'>
      <div className='item'>Insidious</div>
      <div className='item'>The Flash</div>
      <div className='item'>X-men</div>
      </div>
    </div>
  );
}

export default App;
