import alt from '../alt';
import {BASE_URL, STATES} from '../../../config';
import APIRequest from '../../JSLib/APIRequest';

var api = new APIRequest(BASE_URL);

class StateActions {
	
	/**
	 * [load load ]
	 * @return {[type]} [description]
	 */
	load(){
		this.dispatch();
		return api.get({
			endpoint: STATES.LIST
		}).then( states => {
			this.actions.update(states);
			return states;
		}.bind(this)).catch( error => {
			this.actions.requestFailed(error);
			return error;
		}.bind(this));
	}

	loadOne(id){
		this.dispatch();
		return api.get({
			endpoint: [STATES.GETBYID,id].join('/')
		}).then( state => {
			this.actions.updateOne(state);
			return state;
		}.bind(this)).catch( error => {
			this.actions.requestFailed(error);
			return error;
		}.bind(this));
	}

	update(states){
		this.dispatch(states);
	}

	updateOne(state){
		this.dispatch(state);
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

export default alt.createActions(StateActions);
