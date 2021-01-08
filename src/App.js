import { Helmet } from "react-helmet";
import { Switch, Route, useHistory } from 'react-router-dom';
import { Container, Box } from 'bumbag';
import { Header, Navigation, Loading, Stories, Questions, Jobs } from './components';

const App = () => {

	const history = useHistory();

	return (
		<Container isFluid>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Hacker News Clone</title>
			</Helmet>
			<Box padding="0.5rem">
				<Header />
				<Navigation />
				<Switch>
					<Route path="/hacker-news-clone/stories"><Stories /></Route>
					<Route path="/hacker-news-clone/questions"><Questions /></Route>
					<Route path="/hacker-news-clone/jobs"><Jobs /></Route>
					<Route path="/hacker-news-clone" render={() => history.push('/hacker-news-clone/stories')}></Route>
				</Switch>
			</Box>
		</Container>
	);

};

export default App;
