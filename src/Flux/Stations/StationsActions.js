import alt from '../alt';
import {BASE_URL, STATIONS} from '../../../config';
import APIRequest from '../../JSLib/APIRequest';

var api = new APIRequest(BASE_URL);

class StationsActions {
	
	/**
	 * [load load ]
	 * @return {[type]} [description]
	 */
	load(){
		this.dispatch();
		return api.get({
			endpoint: STATIONS.LIST
		}).then( stations => {
			this.actions.update(stations);
			return stations;
		}.bind(this)).catch( error => {
			this.actions.requestFailed(error);
			return error;
		}.bind(this));
	}

	loadOne(id){
		this.dispatch();
		return api.get({
			endpoint: [STATIONS.GETBYID,id].join('/')
		}).then( station => {
			this.actions.updateOne(station);
			return station;
		}.bind(this)).catch( error => {
			this.actions.requestFailed(error);
			return error;
		}.bind(this));
	}

	update(stations){
		this.dispatch(stations);
	}

	updateOne(station){
		this.dispatch(station);
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

export default alt.createActions(StationsActions);
