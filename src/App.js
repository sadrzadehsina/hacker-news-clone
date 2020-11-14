import axios from 'axios';
import { useQuery, useMutation, useQueryCache, QueryCache, ReactQueryCacheProvider } from 'react-query'
import { Container, Box } from 'bumbag';

import { Header, TopStories } from './components';

const App = () => {
	
	const queryCache = new QueryCache({
		defaultConfig: {
			queries: {
				refetchOnWindowFocus: false,
			},
		},
	})

	const getTopStories = async () => {

		const topStories = [];

		const storyIds = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
			.then(response => response.data);

		storyIds.splice(0, 15).map(id => {
			const story = axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(response => response.data);
			topStories.push(story);
		});

		return Promise.all(topStories).then(items => items.sort((a, b) => b.score > a.score ? 1 : -1));
	};

	const { isLoading, isError, data: topStories, error } = useQuery('topStories', getTopStories);

	return (
		<Container isFluid>
			<Box padding="0.5rem">
				<Header />
				{
					isLoading ? 
					<span>Wait to load stories</span> : 
					(
						<ReactQueryCacheProvider queryCache={queryCache}>
							<TopStories items={topStories} />
						</ReactQueryCacheProvider>
					)
				}
			</Box>
		</Container>
	)

};

export default App;
