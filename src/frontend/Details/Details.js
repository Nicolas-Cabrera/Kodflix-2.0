import React, { useState, useEffect} from 'react';
import { useParams, Link, Redirect } from 'react-router-dom';
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

    if(movie !== undefined) {
        return (
            <div>
                <h1>Welcome to details page</h1>
                <h1>{movie.name}</h1>
                <Link to ='/'>Go back to home page</Link>
            </div>
        );
    } else {
        return <Redirect to='/NotFound' />
    }
}
