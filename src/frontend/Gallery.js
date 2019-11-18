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
                <Movies id='breaking-bad' name='Breaking Bad' image={BreakingB} />
                <Movies id='casa-de-papel' name='Casa De Papel' image={CasaDePapel} />
                <Movies id='harry-potter' name='Harry Potter' image={HarryPotter} />
                <Movies id='insidious' name='Insidious' image={Insidious} />
                <Movies id='the-flash' name='The Flash' image={Flash} />
                <Movies id='x-men' name='X-Men' image={Xmen} />
            </div>
        </>
    )
}