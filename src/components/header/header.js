import React from 'react';
import { TopNav, Image, Label, Heading } from 'bumbag';

const Header = () => {

	return (
		<TopNav>
			<TopNav.Section>
				<TopNav.Item href="https://bumbag.style" fontWeight="semibold">
					<Image src="https://news.ycombinator.com/y18.gif" />
					<Heading use="h6">Hacker News Clone</Heading>
				</TopNav.Item>
			</TopNav.Section>
		</TopNav>
	)

};

export { Header };