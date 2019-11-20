import React, { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import getMovies from '../getMovies';

export default function Details(props) {

    const { movieId } = useParams();
    let [movie, setMovie] = useState('');

    useEffect(() => {
        let movie = getMovies().find((movie) => {
        return movie.id === movieId;
        });
        setMovie(movie);
    }, [movieId]);
    
    return (
        <div>
            <h1>Welcome to details page</h1>
            <h1>{movie.name}</h1>
        </div>
    );
}
