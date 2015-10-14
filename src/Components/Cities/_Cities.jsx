import _ from 'lodash';
import React from 'react';

// components
import {Link} from 'react-router'; 
import {Col, Row} from 'react-bootstrap';

// flux
import CitiesStore from '../../Flux/Cities/CitiesStore';
import CitiesActions from '../../Flux/Cities/CitiesActions';

class Cities extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'Cities';

		this.state = CitiesStore.getState();
		this._onStoreChange = this._onStoreChange.bind(this);
	}

	componentWillMount() {
		CitiesActions.load();
	}

	componentDidMount() {
		CitiesStore.listen(this._onStoreChange);
	}

	componentWillUnmount() {
		CitiesStore.unlisten(this._onStoreChange);
	}

	_onStoreChange(state){
		
		this.setState(state);
	}

	render() {
		return (<div className="states">
			<h1>Cities</h1>
			<Col>{
				_.map(this.state.states, function(state, key){
					return (<div key={key}><Link to={`/cities/${state._id}`} >
						{state.name}
					</Link></div>);
				})
			}</Col>
		</div>);
	}
}

export default Cities;
