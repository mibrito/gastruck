import Index from './Components/Index';
import States from './Components/States';

var routes = {
	component: Index,
	childRoutes: [
		{ path: '/', component: States }
	]
};

export default routes;
