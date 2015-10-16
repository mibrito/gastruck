import _ from 'lodash';
import alt from '../alt';

import MetadataActions from './MetadataActions';

var clean = {
	errorMessage: null,
	dates: {}
};

class MetadataStore {
	constructor(){
		_.assign(this, clean);

		this.bindListeners({
			cleanDates: MetadataActions.LOAD_DATES,
			update: MetadataActions.UPDATE,
			requestFailed: MetadataActions.REQUEST_FAILED,
		});
	}

	cleanDates(objName){
		this.dates = _.clone(clean.dates);
	}

	update(obj){
		_.merge(this, obj);
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

export default alt.createStore(MetadataStore, 'MetadataStore');