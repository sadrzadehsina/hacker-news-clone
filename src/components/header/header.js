import React from 'react';
import { 
	TopNav, 
	Image, 
	Label, 
	Heading, 
	useColorMode,
	Button,
	Set,
} from 'bumbag';

const Header = () => {

	const { colorMode, setColorMode } = useColorMode();

	return (
		<TopNav>
			<TopNav.Section>
				<TopNav.Item href="#" fontWeight="semibold">
					<Image src="https://news.ycombinator.com/y18.gif" />
					<Heading use="h6" paddingX="minor-2">Hacker News Clone</Heading>
				</TopNav.Item>
			</TopNav.Section>
			<TopNav.Section>
				<TopNav.Item>
					<Set>
						<Button onClick={() => setColorMode('default')}>Light</Button>
						<Button onClick={() => setColorMode('dark')}>Dark</Button>
					</Set>
				</TopNav.Item>
			</TopNav.Section>
		</TopNav>
	)

};

export { Header };