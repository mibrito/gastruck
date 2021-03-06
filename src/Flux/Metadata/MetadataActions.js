import alt from '../alt';
import {BASE_URL, META} from '../../../config';
import APIRequest from '../../JSLib/APIRequest';

var api = new APIRequest(BASE_URL);

class MetadataActions {
	
	/**
	 * [load load ]
	 * @return {[type]} [description]
	 */
	loadDates(){
		this.dispatch('dates');
		return api.get({
			endpoint: META.DATES
		}).then( dates => {
			this.actions.update({dates});
			return dates;
		}.bind(this)).catch( error => {
			this.actions.requestFailed(error);
			return error;
		}.bind(this));
	}

	update(obj){
		this.dispatch(obj);
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

export default alt.createActions(MetadataActions);
