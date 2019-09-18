import React from 'react';
import {
	Container,
	Header,
	Segment
} from 'semantic-ui-react';

function Footer() {
	return (
		<Segment inverted vertical className="responsive-footer">
			<Container textAlign="center">
				<Header inverted><em>fin.</em></Header>
			</Container>
		</Segment>
	);
}

export default Footer;