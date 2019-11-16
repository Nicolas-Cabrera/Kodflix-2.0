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
        <div className='item'>
          <img src={BreakingB} alt='breakingbad' />
        </div>
        <div className='item'>
          <img src={CasaDePapel} alt='casadepapel' />
        </div>
        <div className='item'>
          <img src={HarryPotter} alt='harrypotter' />
        </div>
      </div>
      <div className='container'>
        <div className='item'>
          <img src={Insidious} alt='insidious' />
        </div>
        <div className='item'>
          <img src={Flash} alt='flash' />
        </div>
        <div className='item'>
          <img src={Xmen} alt='xmen' />
        </div>
      </div>
    </div>
  );
}

export default App;
