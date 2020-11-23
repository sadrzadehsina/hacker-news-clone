import React from 'react';
import { Heading, Link, Box, Tag, Set } from 'bumbag';

import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import {
	useQuery,
	useQueryCache,
	QueryCache,
	ReactQueryCacheProvider,
} from 'react-query';

import { Loading } from '../loading';

import { useTopStories } from '../../hooks';

const TopStories = () => {

	dayjs.extend(relativeTime);

	const queryCache = new QueryCache({
		defaultConfig: {
			queries: {
				refetchOnWindowFocus: false,
			},
		},
	});

	const { isLoading, isError, data: items, error } = useTopStories();

	if (isLoading) return <Loading />;

	return (
		<ReactQueryCacheProvider queryCache={queryCache}>
			{
				items.map(item => (
					<Box key={item.id} padding='1rem'>
						<Heading use='h5'><Link key={item.id} href={item.url}>{item.title}</Link></Heading>
						<Set spacing="minor-1">
							<Tag>{item.by}</Tag>
							<Tag>{dayjs(item.time * 1000).fromNow()}</Tag>
						</Set>
					</Box>
				))
			}
		</ReactQueryCacheProvider>
	);

};

export { TopStories };