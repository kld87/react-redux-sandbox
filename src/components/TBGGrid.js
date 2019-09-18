import React from 'react';
import { connect } from 'react-redux';
import { Grid } from 'semantic-ui-react';

import { toggledButton } from '../redux/actions';
import ToggleButtonGroup from './ToggleButtonGroup';

function TBGGrid() {
	//to keep ToggleButtonGroup reusable, we pass in the function it should call (wired in via Redux) as "callbackName"
	//this component could still be used without a callback provided since it manages its own state
	//hence making it reusable, without having to "lift state" for any use-case where its data needs to be extracted
	return (
		<Grid divided textAlign="center">
			<Grid.Row columns={3}>
				<Grid.Column>
					<ToggleButtonGroupContainer
						id="left"
						callbackName="toggledButton"
						header="Left Instance"/>
				</Grid.Column>
				<Grid.Column>
					<ToggleButtonGroupContainer
						id="center"
						callbackName="toggledButton"
						header="Center Instance"/>
				</Grid.Column>
				<Grid.Column>
					<ToggleButtonGroupContainer
						id="right"
						callbackName="toggledButton"
						header="Right Instance"/>
				</Grid.Column>
			</Grid.Row>
		</Grid>
	);
}

//container wrapping to tie in Redux
const mapDispatchToProps = {
	toggledButton
};

const ToggleButtonGroupContainer = connect(
	null,
	mapDispatchToProps
)(ToggleButtonGroup);

export default TBGGrid;