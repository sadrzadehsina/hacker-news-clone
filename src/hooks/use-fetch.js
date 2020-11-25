import axios from 'axios';
import { useQuery } from 'react-query';
import * as utils from '../utils';

export const useFetch = ({
	key,
	allUrl,
	oneUrl,
}) => {

	const fetch = async () => {

		const items = [];

		const ids = await axios.get(allUrl).then(response => response.data);

		utils.paginate(ids, 0).map(id => {
			const item = axios.get(`${oneUrl}/${id}.json`).then(response => response.data);
			items.push(item);
		});

		return Promise.all(items).then(items => items.sort(utils.sortByScore));

	};

	return useQuery(key, fetch);

};