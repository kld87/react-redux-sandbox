import React from 'react';
import { connect } from 'react-redux';
import {
	Grid,
	Segment,
	Label
} from 'semantic-ui-react'
import hljs from 'highlightjs';

class ReduxDebugBlock extends React.Component {
	render() {
		//generate Redux debugging text
		const totals = "//Current \"totals\" state from Redux\nconst reduxStateTotals = " + JSON.stringify(this.props.totals, null, 2) + ';';
		const lastAction = "//Most recent non-internal action from Redux\nconst reduxLastAction = " + JSON.stringify(this.props.lastAction, null, 2) + ';';

		return (
			<Segment>
				<Label color="teal" ribbon>Redux Debug</Label>
				<Grid divided>
					<Grid.Row columns={2}>
						<Grid.Column>
							<pre>
								<code className="javascript">{totals}</code>
							</pre>
						</Grid.Column>
						<Grid.Column>
							<pre>
								<code className="javascript">{lastAction}</code>
							</pre>
						</Grid.Column>
					</Grid.Row>
				</Grid>
			</Segment>
		);
	}

	//group of functions to trigger the JS syntax highlighting around react (re)renders
	highlight() {
		hljs.initHighlighting.called = false;
		hljs.initHighlighting();
	}
	componentDidMount() {
		this.highlight();
	}
	componentDidUpdate() {
		this.highlight();
	}
}

//container wrapping to tie in redux
const mapStateToProps = (state) => ({
	totals: state.totals,
	lastAction: state.lastAction
});

const ReduxDebugBlockContainer = connect(
	mapStateToProps
)(ReduxDebugBlock);

export default ReduxDebugBlockContainer;