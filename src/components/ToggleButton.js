import React from 'react';
import { Button } from 'semantic-ui-react';

function ToggleButton(props) {
	return (
		<Button
			onClick={props.onClick}
			className={props.active ? 'orange spaced-button' : 'spaced-button'}>
			{props.text}
		</Button>
	);
}

export default ToggleButton;
