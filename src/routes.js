/*
 * Describe all routes of the application used by react-router
 */

// Main
import MainComponent from './Components/Main/MainComponent';

// Box
import Brazil from './Components/Content/Brazil';
import State from './Components/Content/State';
import City from './Components/Content/City';
import Station from './Components/Content/Station';

import Search from './Components/Content/Search';

var routes = {
	component: MainComponent,
	path:'/',
	childRoutes: [
		{ path: '/i', component: Brazil },
		{ path: '/i/:state', component: State },
		{ path: '/i/:state/:city', component: City },
		{ path: '/i/:state/:city/:station', component: Station },
		{ path: '/search', component: Search }
	]
};

export default routes;
