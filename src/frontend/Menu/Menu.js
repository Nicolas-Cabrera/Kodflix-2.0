import React, { useState } from 'react';
import './Menu.css';
import MenuIcon from './menu.png';

export default function Menu() {

	const [isMenuVisible, setIsMenuVisible] = useState(false);

	function toggleMenu() {
		setIsMenuVisible(!isMenuVisible);
	}

	return (
		<div className={'menu ' + (isMenuVisible ? 'is-visible' : '')}>
			<button className='menu-toggle' onClick={() => toggleMenu()}>
				<img src={MenuIcon} alt='Menu' />
			</button>
			<div className='menu-panel'>
				<div className='menu-panel-box'>Hello menu!</div>
				<div className='menu-panel-overlay' onClick={() => toggleMenu()} />
			</div>
		</div>
	)
}