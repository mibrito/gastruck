import _ from 'lodash';
import alt from '../alt';

import CitiesActions from './CitiesActions';

var clean = {
	errorMessage: null,
	cities: {}
};

class CitiesStore {
	constructor(){
		_.assign(this, clean);

		this.bindListeners({
			clean: CitiesActions.LOAD,
			cleanOne: CitiesActions.LOAD_ONE,
			update: CitiesActions.UPDATE,
			updateOne: CitiesActions.UPDATE_ONE,
			requestFailed: CitiesActions.REQUEST_FAILED,
		});
	}

	clean(){
		_.assign(this, _.clone(clean));
	}

	cleanOne(){
		_.assign(this, clean);
	}

	update(cities){
		this.cities = _.indexBy(cities, '_id');
		this.errorMessage = clean.errorMessage;
	}

	updateOne(city){
		this.cities[city._id] = city;
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