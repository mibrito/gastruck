import MainComponent from './Components/MainComponent';


// states
import States from './Components/States/States';
import StatesDetails from './Components/States/Details';

// cities
import Cities from './Components/Cities/Cities';
import CitiesDetails from './Components/Cities/Details';

// stations
import Stations from './Components/Stations/Stations';
import StationsDetails from './Components/Stations/Details';

var routes = {
	component: MainComponent,
	childRoutes: [
		{ path: '/', component: States },
		{ path: '/:state', component: StatesDetails },
		// { path: '/:state/:city', component: Cities },
		{ path: '/:state/:city', component: CitiesDetails },
		// // { path: '/stations', component: Stations },
		{ path: '/:state/:city/:station', component: StationsDetails }
	]
};

export default routes;
