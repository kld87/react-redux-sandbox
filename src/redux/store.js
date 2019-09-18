import {
	combineReducers,
	createStore,
} from 'redux';

import {
	totals,
	lastAction
} from './reducers';

const reducers = combineReducers({
	totals,
	lastAction
});

function configureStore(initialState = {}) {
	return createStore(reducers, initialState);
}

export default configureStore();