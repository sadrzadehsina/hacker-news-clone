import axios from 'axios';
import { useQuery, useMutation, useQueryCache, QueryCache, ReactQueryCacheProvider } from 'react-query'
import { Container, Box } from 'bumbag';

import { Header, Loading, TopStories } from './components';
import { useTopStories, useAsks } from './hooks';

const App = () => {

	const queryCache = new QueryCache({
		defaultConfig: {
			queries: {
				refetchOnWindowFocus: false,
			},
		},
	});

	const { isLoading, isError, data: topStories, error } = useTopStories();
	// const { isLoading, isError, data: asks, error } = useAsks();

	return (
		<Container isFluid>
			<Box padding="0.5rem">
				<Header />
				{
					isLoading ? 
					<Loading /> : 
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
