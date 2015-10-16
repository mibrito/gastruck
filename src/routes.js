// Main
import MainComponent from './Components/Main/MainComponent';
import Index from './Components/Main/Index';

// Box
import BoxBrazil from './Components/Box/Brazil';
import BoxState from './Components/Box/State';
import BoxCity from './Components/Box/City';
import BoxStation from './Components/Box/Station';

var routes = {
	component: MainComponent,
	childRoutes: [
		{ path: '/', component: Index },
		{ path: 'box', component: BoxBrazil },
		{ path: 'box/:state', component: BoxState },
		{ path: 'box/:state/:city', component: BoxCity },
		{ path: 'box/:state/:city/:station', component: BoxStation }
	]
};

export default routes;
