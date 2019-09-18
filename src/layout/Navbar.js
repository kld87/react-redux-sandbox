import React from 'react';
import {
	Container,
	Menu,
	Icon
} from 'semantic-ui-react';

function Navbar() {
	return (
		<Menu inverted stackable className="navbar">
			<Container>
				<Menu.Item header>
					<span className="pinkish"><Icon fitted name="react"/>&nbsp;React + Redux Sandbox</span>
				</Menu.Item>
				<Menu.Item as="a" href="//github.com/kld87/react-redux-sandbox">
					<Icon fitted name='github'/>&nbsp;On Github
				</Menu.Item>
				<Menu.Item as="a" href="http://kevindawe.ca">
					<Icon fitted name="globe"/>&nbsp;My Website
				</Menu.Item>
			</Container>
		</Menu>
	);
}

export default Navbar;