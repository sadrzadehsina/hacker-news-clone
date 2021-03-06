import React from 'react';
import { useHistory } from 'react-router-dom';
import { Set, Button } from 'bumbag';

export const Navigation = ({ ...props }) => {
	
	const history = useHistory();

	const go = path => history.push(path);

	return (
		<Set>
			<Button variant="ghost" onClick={() => go('/hacker-news-clone/stories')}>Stories</Button>
			<Button variant="ghost" onClick={() => go('/hacker-news-clone/questions')}>Questions</Button>
			<Button variant="ghost" onClick={() => go('/hacker-news-clone/jobs')}>Jobs</Button>
		</Set>
	);

};