import _ from 'lodash';
import alt from '../alt';

import FindActions from './FindActions';


class FindStore {
	constructor(){
		this.objs = {};
		this.errorMessage = null;

		this.bindListeners({
			clean: FindActions.FIND,
			cleanAll: FindActions.CLEAN_ALL,
			update: FindActions.UPDATE,
			requestFailed: FindActions.REQUEST_FAILED,
		});
	}

	clean(){
		this.objs = {};
		this.errorMessage = null;
	}

	cleanAll(){
		this.objs = {};
		this.errorMessage = null;
	}

	update(objs){
		this.objs = objs
		this.errorMessage = null;
	}

	/**
	 * requestFailed: save status of errors
	 * @return {void}
	 */
	requestFailed(errorMessage){
		this.errorMessage = errorMessage;
	}
}

export default alt.createStore(FindStore, 'FindStore');