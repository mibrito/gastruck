import _ from 'lodash';
import alt from '../alt';

import StatesActions from './StatesActions';

var clean = {
	errorMessage: null,
	states: []
};

class StatesStore {
	constructor(){
		_.assign(this, clean);

		this.bindListeners({
			clean: StatesActions.LOAD,
			update: StatesActions.UPDATE,
			requestFailed: StatesActions.REQUEST_FAILED,
		});
	}

	clean(){
		this.historyRating = clean.historyRating;
		this.errorMessage = clean.errorMessage;
	}

	update(states){
		this.states = _.indexBy(states, 'selEstado');
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