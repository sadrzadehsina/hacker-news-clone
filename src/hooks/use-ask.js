import { useQuery } from 'react-query';
import axios from 'axios';

export const useAsk = () => {

	const fetchAsks = async () => {

		const asks = [];

		const askIds = await axios.get('https://hacker-news.firebaseio.com/v0/askstories.json')
			.then(response => response.data);

			askIds.splice(0, 15).map(id => {
				const story = axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(response => response.data);
				asks.push(story);
			});

		return Promise.all(asks).then(items => items.sort((a, b) => b.score > a.score ? 1 : -1));

	};

	return useQuery('asks', fetchAsks);

};