import _ from 'lodash';
import alt from '../alt';

import StationsActions from './StationsActions';

var clean = {
	errorMessage: null,
	stations: []
};

class StationsStore {
	constructor(){
		_.assign(this, clean);

		this.bindListeners({
			clean: StationsActions.LOAD,
			update: StationsActions.UPDATE,
			updateOne: StationsActions.UPDATE_ONE,
			requestFailed: StationsActions.REQUEST_FAILED,
		});
	}

	clean(){
		this.historyRating = clean.historyRating;
		this.errorMessage = clean.errorMessage;
	}

	update(stations){
		this.stations = _.indexBy(stations, '_id');
		this.errorMessage = clean.errorMessage;
	}

	update(station){
		this.stations[stations._id] = station;
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

export default alt.createStore(StationsStore, 'StationsStore');