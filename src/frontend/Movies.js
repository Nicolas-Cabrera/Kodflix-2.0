import React from 'react';


export default function Movies(props) {
    return (
      <div className='item'>
        <img src={props.image} alt='props.name' />
        <div className='overlay'>
          <h1>{props.name}</h1>
        </div>
      </div>
    )
  }