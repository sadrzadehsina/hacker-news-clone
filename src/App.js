import { Container, Box } from 'bumbag';
import { Header, Loading, TopStories } from './components';

import React from 'react';
import {
	Switch,
	Route,
} from 'react-router-dom';


const App = () => {

	return (
		<Container isFluid>
			<Box padding="0.5rem">
				<Header />
				<Switch>
					<Route path="/stories"><TopStories /></Route>
					<Route path="/questions"><h1>Questions</h1></Route>
					<Route path="/jobs"><h1>Jobs</h1></Route>
					<Route path="/"><h1>Home</h1></Route>
				</Switch>
			</Box>
		</Container>
	);

};

export default App;
