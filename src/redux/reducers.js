export const totals = (state = {groups: {}, total: 0}, action) => {
	switch (action.type) {
		case 'TOGGLED_BUTTON':
			//intelligently (re)compute grand total
			//groups basically contain id: total where id is "left"|"center"|"right" re: instance
			let total = state.total;
			if (state.groups[action.id]) {
				total -= state.groups[action.id];
			}
			total += action.total;

			//return new state
			return {
				groups: {
					...state.groups,
					[action.id]: action.total
				},
				total: total
			};
		default:
			return state;
	}
}

//Note: this is an unusual reducer. We're just using it as a cheeky way to track/render the last (non-internal) action in the UI, for funsies
//(I am aware this can also be viewed via the relevant dev tools extensions)
export const lastAction = (state = {}, action) => {
	if (action && action.type.indexOf('@@') < 0) { //suppress internal actions
		return {...action}; //NOTE: would have to change this if our non-internal actions have depth
	}
	return state;
}