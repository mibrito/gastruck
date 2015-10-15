import alt from '../alt';
import {BASE_URL, CITIES} from '../../../config';
import APIRequest from '../../JSLib/APIRequest';

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
		}).then( cities => {
			this.actions.update(cities);
			return cities;
		}.bind(this)).catch( error => {
			this.actions.requestFailed(error);
			return error;
		}.bind(this));
	}

	loadOne(id){
		this.dispatch();
		return api.get({
			endpoint: [CITIES.GETBYID,id].join('/')
		}).then( city => {
			this.actions.updateOne(city);
			return city;
		}.bind(this)).catch( error => {
			this.actions.requestFailed(error);
			return error;
		}.bind(this));
	}

	update(cities){
		this.dispatch(cities);
	}

	updateOne(city){
		this.dispatch(city);
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
