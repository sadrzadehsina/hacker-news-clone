import React from 'react';
import { Helmet } from "react-helmet";
import { Heading, Link, Box, Tag, Set, Button, Flex } from 'bumbag';

import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import {
	useQuery,
	useQueryCache,
	QueryCache,
	ReactQueryCacheProvider,
} from 'react-query';

import { Loading } from '../loading';

import { useFetch } from '../../hooks';

export const Stories = () => {

	dayjs.extend(relativeTime);

	const queryCache = new QueryCache({
		defaultConfig: {
			queries: {
				refetchOnWindowFocus: false,
			},
		},
	});

	const { isLoading, isError, data, error, canFetchMore, isFetchingMore, fetchMore } = useFetch({ 
		key: 'stories', 
		allUrl: 'https://hacker-news.firebaseio.com/v0/topstories.json', 
		oneUrl: 'https://hacker-news.firebaseio.com/v0/item/',
	});

	if (isLoading) return <Loading />;

	return (
		<div>
			<Helmet><title>Hacker News Clone | Stories</title></Helmet>
			<ReactQueryCacheProvider queryCache={queryCache}>
				{
					data.map((group, i) => (
						<React.Fragment key={i}>
							{
								group.items.map(item => (
									<Box key={item.id} padding='1rem'>
										<Heading use='h5'><Link key={item.id} href={item.url}>{item.title}</Link></Heading>
										<Set spacing="minor-1">
											<Tag>{item.by}</Tag>
											<Tag>{dayjs(item.time * 1000).fromNow()}</Tag>
										</Set>
									</Box>
								))
							}
						</React.Fragment>
					))
				}
				{ 
					canFetchMore && 
					<Flex alignX='center'>
						<Button 
							isLoading={!canFetchMore || isFetchingMore}
							disabled={!canFetchMore || isFetchingMore}
							onClick={() => fetchMore()}
						>
							Load More
						</Button> 
					</Flex>
				}
			</ReactQueryCacheProvider>
		</div>
	);

};