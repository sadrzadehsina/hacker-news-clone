import React from 'react';
import { 
	TopNav, 
	Image, 
	Label, 
	Heading, 
	useColorMode,
	Button,
	Set,
	Icon,
} from 'bumbag';

const Header = () => {

	const { colorMode, setColorMode } = useColorMode();

	const moon = {
		viewBoxWidth: 24,
		viewBoxHeight: 24,
		paths: ['M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z']
	};

	const sun = {
		viewBoxWidth: 24,
		viewBoxHeight: 24,
		paths: ['M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z'],
	};

	const isDark = () => colorMode === 'dark';

	const toggleColorMode = () => {
		if (isDark()) setColorMode('light');
		else setColorMode('dark');
	};

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
						<Button onClick={() => toggleColorMode()} variant="ghost" size="large">
							<Icon aria-label='moon' icon={isDark() ? sun : moon} fontSize="400" />
						</Button>
					</Set>
				</TopNav.Item>
			</TopNav.Section>
		</TopNav>
	)

};

export { Header };