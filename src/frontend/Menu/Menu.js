import React from 'react';
import './Menu.css';
import MenuIcon from './menu.svg';

export default function Menu() {

	function openMenu() {
		console.log('Menu Clicked');
	}

	return (
		<div className='menu'>
			<button className='menu-open' onClick={() => openMenu() }>
				<img src={MenuIcon} alt='Menu' />
			</button>
		</div>
	)
}