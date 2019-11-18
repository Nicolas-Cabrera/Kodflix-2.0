import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Details() {
    let [message, setMessage] = useState('Hello, this will be the details page for each Movie & TV show :)');
    useEffect(() => {
        setTimeout(() => {
            setMessage('Coming Soon! :)');
        }, 3000);
    });

    return (
        <div>
            <h1>Welcome Josue to details page</h1>
            <h2>{message}</h2>
        </div>
    );
}

//Class way of doing it
// export default class Details extends Component {
//     constructor(){
//         super();
//         this.state = {
//             welcomeMessage: 'Hello, this will be the details page for each Movie & TV show :)'
//         };
//     }
//     componentDidMount() {
//         setTimeout(() => {
//             this.setState({welcomeMessage: 'Coming Soon! :)'});
//         }, 3000);
//     }
//     render() {
//         return (
//             <>
//                 <h1>Welcome to details page</h1>
//                 <h2>{this.state.welcomeMessage}</h2>
//                 <Link to='/'>Back to home page</Link>
//             </>
//         )
//     }
// }