import React from 'react';
import { Heading, Link, Box, Tag, Set } from 'bumbag';

import * as dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

const TopStories = ({ items }) => {

	dayjs.extend(relativeTime);

	return items.map(item => (
		<Box key={item.id} padding='1rem'>
			<Heading use='h5'><Link key={item.id} href={item.url}>{item.title}</Link></Heading>
			<Set spacing="minor-1">
				<Tag>{item.by}</Tag>
				<Tag>{item.type}</Tag>
				<Tag>{dayjs(item.time * 1000).fromNow()}</Tag>
			</Set>
		</Box>
	));

};

export { TopStories };