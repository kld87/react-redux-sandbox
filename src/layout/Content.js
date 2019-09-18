import React from 'react';
import {
	Container,
	Segment,
	Label,
	Divider
} from 'semantic-ui-react';

import ReduxDebugBlock from '../components/ReduxDebugBlock';
import About from '../components/About';
import GrandTotal from '../components/GrandTotal';
import TBGGrid from '../components/TBGGrid';

function Content(props) {
	return (
		<Container>
			<Segment>
				<Label color="teal" ribbon>App</Label>
				<TBGGrid />
				<Divider />
				<GrandTotal/>
			</Segment>
			<ReduxDebugBlock />
			<About />
		</Container>
	);
}

export default Content;