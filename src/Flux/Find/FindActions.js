import alt from '../alt';
import {BASE_URL, FIND} from '../../../config';
import APIRequest from '../../JSLib/APIRequest';

var api = new APIRequest(BASE_URL);

class FindActions {
	
	/**
	 * [load load ]
	 * @return {[type]} [description]
	 */
	find(name){
		this.dispatch();
		return api.get({
			endpoint: FIND.FIND + '/' + name
		}).then( objs => {
			this.actions.update(objs);
			return objs;
		}.bind(this)).catch( error => {
			this.actions.requestFailed(error);
			return error;
		}.bind(this));
	}

	update(objs){
		this.dispatch(objs);
	}

	cleanAll(){
		this.dispatch();
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

export default alt.createActions(FindActions);
