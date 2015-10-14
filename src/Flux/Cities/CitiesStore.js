import _ from 'lodash';
import alt from '../alt';

import CitiesActions from './CitiesActions';

var clean = {
	errorMessage: null,
	states: []
};

class CitiesStore {
	constructor(){
		_.assign(this, clean);

		this.bindListeners({
			clean: CitiesActions.LOAD,
			update: CitiesActions.UPDATE,
			requestFailed: CitiesActions.REQUEST_FAILED,
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

export default alt.createStore(CitiesStore, 'CitiesStore');