import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Container, Box } from 'bumbag';
import { Header, Navigation, Loading, Stories, Questions, Jobs } from './components';

const App = () => {

	return (
		<Container isFluid>
			<Box padding="0.5rem">
				<Header />
				<Navigation />
				<Switch>
					<Route path="/hacker-news-clone/stories"><Stories /></Route>
					<Route path="/hacker-news-clone/questions"><Questions /></Route>
					<Route path="/hacker-news-clone/jobs"><Jobs /></Route>
					<Route path="/hacker-news-clone"><h1>Home</h1></Route>
				</Switch>
			</Box>
		</Container>
	);

};

export default App;
