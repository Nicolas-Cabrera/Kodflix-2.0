import React from 'react';
import { Link } from 'react-router-dom';

export default function notFound() {
    return (
        <>
            <h2>Ooops page not found</h2>
            <Link to='/'>Go back to home page</Link>
        </>
    )
}