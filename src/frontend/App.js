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
          <div className='overlay'>
            <h1>Breaking Bad</h1>
          </div>
        </div>
        <div className='item'>
          <img src={CasaDePapel} alt='casadepapel' />
          <div className='overlay'>
            <h1>Casa De Papel</h1>
          </div>
        </div>
        <div className='item'>
          <img src={HarryPotter} alt='harrypotter' />
          <div className='overlay'>
            <h1>Harry Potter</h1>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className='item'>
          <img src={Insidious} alt='insidious' />
          <div className='overlay'>
            <h1>Insidious</h1>
          </div>
        </div>
        <div className='item'>
          <img src={Flash} alt='flash' />
          <div className='overlay'>
            <h1>The Flash</h1>
          </div>
        </div>
        <div className='item'> 
          <img src={Xmen} alt='xmen' />
          <div className='overlay'>
            <h1>X-Men</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
