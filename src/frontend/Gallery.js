import React, { useState, useEffect } from 'react';
import Movies from '../frontend/Movies';


export default function Gallery() {

    let [movies, setMovies] = useState();

    useEffect(() => {
        fetch('/rest/movies')
            .then(response => response.json())
            .then(movies => setMovies(movies))
    }, []);

    return (
        <>
            <div>
                <h1>Welcome to Kodflix</h1>
            </div>
            <div className='container'>      
                {
                    movies? 
                    movies.map(movies => (
                        <Movies
                            key={movies.id}
                            id={movies.id} 
                            name={movies.name} 
                            logo={movies.logo} />
                    )) :
                    <h2>No data</h2>
                }
            </div>
        </>
    )
}