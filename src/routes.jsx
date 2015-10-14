import MainComponent from './Components/MainComponent';
import Teste from './Components/Teste';

var routes = {
	component: MainComponent,
	childRoutes: [
		{ path: '/', component: Teste }
	]
};

export default routes;
