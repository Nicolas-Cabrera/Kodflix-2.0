import React, { useState, useEffect } from 'react';
import { useParams, Link, Redirect } from 'react-router-dom'; 
import '../Details/Details.css'
import Loading from '../LoadingIcon/LoadingIcon';

export default function Details() {

    const { movieId } = useParams();
    const [ movie, setMovie ] = useState([]);

    useEffect(() => {
		fetch(`/rest/movies/${movieId}`)
			.then(response => response.json())
			.then(movies => setMovie(movies));
	}, [movieId]);

    if (Array.isArray(movie) && movie.length === 0) {
        return <div>
            <Loading />
        </div>
    }    
    else if(movie !== undefined) {
        return (
            <div className='details'>
                <h1>Welcome to details page</h1>
                <div className='content'>
                    <div>
                        <h1>{movie.name}</h1>
                        <div className='objects'>{movie.detail}</div>
                    </div>
                    <img className='movie' src={require(`../Images/${movie.id}.jpg`)} alt={movie.name} />
                </div>
                <div className='links'>
                    <Link to='/' className='linkText'>Go back to home page</Link>
                </div>
            </div>
        );
    } else {
        return <Redirect to='/NotFound' />
    }
}
