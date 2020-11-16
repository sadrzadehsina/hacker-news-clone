import React from 'react';
import { Spinner, Box } from 'bumbag';

const Loading = ({

}) => {

	return (
		<Box alignX="center" padding="2rem">
			<Spinner hasTrack size="large" />
		</Box>
	);

};

export { Loading };