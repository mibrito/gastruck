import _ from 'lodash';
import alt from '../alt';

import StationsActions from './StationsActions';

var clean = {
	errorMessage: null,
	stations: {}
};

class StationsStore {
	constructor(){
		_.assign(this, _.clone(clean));

		this.bindListeners({
			clean: StationsActions.LOAD,
			update: StationsActions.UPDATE,
			updateOne: StationsActions.UPDATE_ONE,
			requestFailed: StationsActions.REQUEST_FAILED,
		});
	}

	clean(){
		_.assign(this, _.clone(clean));
	}

	update(stations){
		this.stations = _.indexBy(stations, '_id');
		this.errorMessage = clean.errorMessage;
	}

	updateOne(station){
		this.stations[station._id] = station;
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