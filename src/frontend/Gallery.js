import React, { useState, useEffect } from 'react';
import Movies from '../frontend/Movies';
import Loading from './LoadingIcon/LoadingIcon';

export default function Gallery() {

    let [movies, setMovies] = useState();

    useEffect(() => {
        fetch('/rest/movies')
            .then(response => response.json())
            .then(movies => setMovies(movies))
    }, []);

    if (movies) {
        return <>
            <div>
                <h1>Welcome to Kodflix</h1>
                <div className='container'>
                    {
                        (movies.map(movies => (
                            <Movies
                                key={movies.id}
                                id={movies.id}
                                name={movies.name}
                                logo={movies.logo} />
                        ))) 
                    }
                </div>
            </div>
        </>
    } else {
		//return <Loading />  
		return <h1> Nothing to display</h1>
    }
}