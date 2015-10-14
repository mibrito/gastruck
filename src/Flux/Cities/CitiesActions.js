import alt from '../alt';
import {BASE_URL, CITIES} from '../../../config';
import APIRequest from '../../Lib/APIRequest';

var api = new APIRequest(BASE_URL);

class CitiesActions {
	
	/**
	 * [load load ]
	 * @return {[type]} [description]
	 */
	load(){
		this.dispatch();
		return api.get({
			endpoint: CITIES.LIST
		}).then( states => {
			this.actions.update(states);
			return states;
		}.bind(this)).catch( error => {
			this.actions.requestFailed(error);
			return error;
		}.bind(this));
	}

	update(states){
		this.dispatch(states);
	}

	/**
	 * requestFailed: propagate error generated on requests
	 * @param  {Error}	error	Error rised by a request
	 * @return {void}
	 */
	requestFailed(error){
		this.dispatch(error);
	}
}

export default alt.createActions(CitiesActions);