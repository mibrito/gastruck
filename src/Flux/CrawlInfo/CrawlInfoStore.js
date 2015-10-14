import _ from 'lodash';
import alt from '../alt';

import CrawlInfoActions from './CrawlInfoActions';

var clean = {
	errorMessage: null,
	dates: {}
};

class CrawlInfoStore {
	constructor(){
		_.assign(this, clean);

		this.bindListeners({
			cleanDates: CrawlInfoActions.LOAD_DATES,
			update: CrawlInfoActions.UPDATE,
			requestFailed: CrawlInfoActions.REQUEST_FAILED,
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

export default alt.createStore(CrawlInfoStore, 'CrawlInfoStore');