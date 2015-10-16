export const APPNAME = 'GasTruck';
export const BASE_URL = 'http://' + window.location.hostname + ':3000/';

export const STATES = {
	LIST: 'states',
	GETBYID: ['states', 'id'].join('/')
};

export const CITIES = {
	LIST: 'cities',
	GETBYID: ['cities', 'id'].join('/')
};

export const STATIONS = {
	LIST: 'stations',
	GETBYID: ['stations', 'id'].join('/')
};

export const META = {
	DATES: ['meta', 'dates'].join('/')
};