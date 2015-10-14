import _ from 'lodash';
import alt from '../alt';

import MainActions from './MainActions';

var clean = {
	errorMessage: null,
	states: []
};

class MainStore {
	constructor(){
		_.assign(this, clean);

		this.bindListeners({
			clean: MainActions.LOAD,
			update: MainActions.UPDATE,
			requestFailed: MainActions.REQUEST_FAILED,
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

export default alt.createStore(MainStore, 'MainStore');