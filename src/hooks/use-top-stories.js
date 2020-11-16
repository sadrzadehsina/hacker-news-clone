import { useQuery } from 'react-query';
import axios from 'axios';
import * as utils from '../utils';

export const useTopStories = () => {

	const fetchTopStories = async () => {

		const topStories = [];

		const storyIds = await axios.get('https://hacker-news.firebaseio.com/v0/topstories.json')
			.then(response => response.data);

		utils.paginate(storyIds, 0).map(id => {
			const story = axios.get(`https://hacker-news.firebaseio.com/v0/item/${id}.json`).then(response => response.data);
			topStories.push(story);
		});

		return Promise.all(topStories).then(items => items.sort(utils.sortByScore));

	};

	return useQuery('topStories', fetchTopStories);



};