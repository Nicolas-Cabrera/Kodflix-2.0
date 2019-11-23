import React, { useState, useEffect } from 'react';
import { useParams, Link, Redirect } from 'react-router-dom';
import getMovies from '../getMovies';
import '../Details/Details.css'

export default function Details(props) {

    const { movieId } = useParams();
    let [movie, setMovie] = useState('');

    useEffect(() => {
        let movie = getMovies().find((movie) => {
            return movie.id === movieId;
        });
        setMovie(movie);
    }, [movieId]);

    if (movie !== undefined) {
        return (
            <div className='details'>
                <h1>Welcome to details page</h1>
                <div className='content'>
                    <div>
                        <h1>{movie.name}</h1>
                        <div className='objects'>{movie.detail}</div>
                    </div>
                    <img className='movie' src={movie.logo} alt={movie.name}></img>
                </div>
                <Link to='/' className='links'>Go back to home page</Link>
            </div>
        );
    } else {
        return <Redirect to='/NotFound' />
    }
}
