import React from 'react';
import { Link } from 'react-router-dom';

export default function notFound() {
    return (
        <>
            <h1>Ooops page not found</h1>

            <Link to='/'>Go back to home page</Link>
        </>
    )
}