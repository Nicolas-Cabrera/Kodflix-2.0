import React from 'react';
import Movies from '../frontend/Movies';
import getMovies from './getMovies';

export default function Gallery() {
    return (
        <>
            <h1>Welcome to Kodflix</h1>
            <div className='container'>      
                {
                    getMovies().map(movies => (
                        <Movies
                            key={movies.id}
                            id={movies.id} 
                            name={movies.name} 
                            logo={movies.logo} />
                    ))
                }
            </div>
        </>
    )
}