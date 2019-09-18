import React from 'react';
import { connect } from 'react-redux';
import {
	Segment,
	Header
} from 'semantic-ui-react';

function GrandTotal(props) {
	//props.total coming via Redux
	return (
		<div className="text-center">
			<Segment compact color="grey">
				<Header>Grand Total: <span className="orange">{props.total}</span></Header>
			</Segment>
		</div>
	);
}

//container wrapping to tie in Redux
const mapStateToProps = (state) => ({
	total: state.totals.total,
});

const GrandTotalContainer = connect(
	mapStateToProps
)(GrandTotal);

export default GrandTotalContainer;