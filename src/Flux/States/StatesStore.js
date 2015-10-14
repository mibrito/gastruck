import _ from 'lodash';
import alt from '../alt';

import StatesActions from './StatesActions';

var clean = {
	errorMessage: null,
	states: {}
};

class StatesStore {
	constructor(){
		_.assign(this, clean);

		this.bindListeners({
			clean: StatesActions.LOAD,
			update: StatesActions.UPDATE,
			updateOne: StatesActions.UPDATE_ONE,
			requestFailed: StatesActions.REQUEST_FAILED,
		});
	}

	clean(){
		_.assign(this, _.clone(clean));
	}

	update(states){
		this.states = _.indexBy(states, '_id');
		this.errorMessage = clean.errorMessage;
	}

	updateOne(state){
		this.states[state._id] = state;
		this.errorMessage = clean.errorMessage;
	}

	/**
	 * requestFailed: save status of errors
	 * @return {void}
	 */
	requestFailed(errorMessage){
		this.errorMessage = errorMessage;
	}
}

export default alt.createStore(StatesStore, 'StatesStore');