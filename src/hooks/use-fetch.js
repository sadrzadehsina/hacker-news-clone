import axios from 'axios';
import { useInfiniteQuery, usePaginatedQuery, useQuery } from 'react-query';
import * as utils from '../utils';

export const useFetch = ({
	key,
	allUrl,
	oneUrl,
}) => {

	const fetch = (key, cursor = 0) => new Promise(resolve => {

		console.log(cursor);

		const items = [];

		axios.get(allUrl).then(response => response.data).then(ids => {

			utils.paginate(ids, cursor).map(id => {
				const item = axios.get(`${oneUrl}/${id}.json`).then(response => response.data);
				items.push(item);
			});

			Promise.all(items).then(items => resolve({ items: items.sort(utils.sortByScore), nextCursor: (cursor + 20) + 1 }));
			
		});

	});

	return useInfiniteQuery(key, fetch, {
		getFetchMore: (lastGroup, allGroups) => lastGroup.nextCursor,
	});

};