import request from 'reqwest';
import _ from 'lodash';

class APIRequest {
	constructor (baseUrl, endpoint) {
		this._baseUrl = baseUrl;
		this._endpoint = endpoint;
		this._url = baseUrl+(endpoint?endpoint:'');
	}

	options (method, extraOpts) {
		var _opts = {
			url: this._url+ (extraOpts.endpoint && extraOpts.endpoint || ''),
			type: 'json',
			method: method,
			crossOrigin: true
		};

		if(localStorage.getItem('jwt')){
			_opts.headers = {
				'Authorization': 'Bearer '+localStorage.getItem('jwt')
			};
		}

		if (extraOpts){
			_.assign(_opts, extraOpts);
		}
		return _opts;
	}

	get (extraOpts) {
		return request(this.options('get', extraOpts));
	}

	post (extraOpts) {
		return request(this.options('post', extraOpts));
	}

	put (extraOpts) {
		return request(this.options('put', extraOpts));
	}

	del (extraOpts) {
		return request(this.options('delete', extraOpts));
	}
}

export default APIRequest;
