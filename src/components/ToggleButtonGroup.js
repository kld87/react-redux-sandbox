import React from 'react';
import ToggleButton from './ToggleButton';
import {
	Divider,
	Header,
	Icon
} from 'semantic-ui-react';

class ToggleButtonGroup extends React.Component {
	constructor(props) {
		super(props);
		this.state = this.getClearState();
	}

	//helper used by constructor and reset button when (re)setting the component
	getClearState() {
		return {
			active: Array(10).fill(null),
			total: 0
		};
	}

	//handle toggling a button and updating the state, inc. total recalculation
	//exploded (to support params) fat arrow function to save us from the repetitive this...bind(this) boilderplate
	buttonClick = (i) => () => {
		const active = this.state.active.concat();
		active[i] = !active[i]

		//foreach number, if active, total its value
		const total = active.reduce((t, v, k) => v ? t + k : t+0, 0);

		this.setState({
			active: active,
			total: total
		});

		this.doCallback(total);
	}

	//user clicked the reset icon, zero out the component
	//fat arrow function to save us from the repetitive this...bind(this) boilderplate
	clearClick = () => {
		this.setState(this.getClearState());
		this.doCallback();
	}

	//if present, trigger this instance's associated callback (ie. inform Redis of its state change)
	doCallback(total = 0) {
		if (this.props.callbackName) {
			this.props[this.props.callbackName](this.props.id, total);
		}
	}

	render() {
		//programmatically generate buttons into a numpad-style grid
		const numpad = [
			[1, 2, 3],
			[4, 5, 6],
			[7, 8, 9],
			[null, 0, null]
		];
		const buttons = numpad.map((row, k) => {
			let columns = row.map(n => {
				if (n === null) return null;
				return (
					<ToggleButton
						key={n}
						text={n}
						active={this.state.active[n]}
						onClick={this.buttonClick(n)}/>
				);
			});

			return (
				<div key={k}>
					{columns}
				</div>
			);
		});

		return (
			<div>
				<div>
					<Header className="inline-block tbg-header">{this.props.header}</Header>&nbsp;
					<Icon
						link
						title="Clear"
						name="refresh"
						color="yellow"
						onClick={this.clearClick}/>
				</div>
				{buttons}
				<Divider />
				<div className="text-right">
					<strong>Total: <span className="orange">{this.state.total}</span></strong>
				</div>
			</div>
		);
	}
}

export default ToggleButtonGroup;
