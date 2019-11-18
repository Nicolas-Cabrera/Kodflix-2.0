import React from 'react';
import Movies from '../frontend/Movies';
import BreakingB from './Images/breakingbad.jpg';
import CasaDePapel from './Images/casadepapel.jpg';
import HarryPotter from './Images/harrypotter.jpg';
import Insidious from './Images/insidious.jpg';
import Flash from './Images/theflash.jpg';
import Xmen from './Images/xmen.jpg';

export default function Gallery() {
    return (
        <>
            <div className='container'>
                <Movies name='Breaking Bad' image={BreakingB} />
                <Movies name='Casa De Papel' image={CasaDePapel} />
                <Movies name='Harry Potter' image={HarryPotter} />
            </div>
            <div className='container'>
                <Movies name='Insidious' image={Insidious} />
                <Movies name='The Flash' image={Flash} />
                <Movies name='X-Men' image={Xmen} />
            </div>
        </>
    )
}