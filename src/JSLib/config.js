import request from 'reqwest';

var _config = null;

export default {
	get: function(){
		return _config;
	},
	request: function(){
		return request({ url: '../config.json', method: 'get'})
			.then( config => {
				console.log(config);
				_config = config;
				return Promise.resolve(_config);
			});
	}
};