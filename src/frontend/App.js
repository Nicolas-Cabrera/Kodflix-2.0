import React from 'react';
import './App.css';
import Details from './Details/Details';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Gallery from './Gallery';
import notFound from './NotFound';
import Menu from './Menu/Menu';

function App() {

	return (
		<div>
			<Router>
				<Menu />
				<Switch>
					<div className="App">
						<Route exact path='/' component={Gallery} />
						<Route exact path='/NotFound' component={notFound} />
						<Route exact path='/:movieId' component={Details} />
					</div>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
