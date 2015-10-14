import _ from 'lodash';
import React from 'react';

// components
import {Link} from 'react-router'; 
import {Col, Row} from 'react-bootstrap';

// flux
import StatesStore from '../../Flux/States/StatesStore';
import StatesActions from '../../Flux/States/StatesActions';

class States extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'States';

		this.state = StatesStore.getState();
		this._onStoreChange = this._onStoreChange.bind(this);
	}

	componentWillMount() {
		StatesActions.loadOne(this.props.params.state);
	}

	componentDidMount() {
		StatesStore.listen(this._onStoreChange);
	}

	componentWillUnmount() {
		StatesStore.unlisten(this._onStoreChange);
	}

	_onStoreChange(state){
		this.setState(state);
	}

	render() {
		var state = this.state.states[this.props.params.state] || {};
		var pathname = this.props.location.pathname;
		return (<div className="states">
			<h1>Cities of {state.name || ''}</h1>
			<Col>{
				state.cities && _.map(state.cities, function(city, key){
					return (<div key={key}><Link to={`${pathname}/${city._id}`} >
						{city.name}
					</Link></div>);
				})
			}</Col>
		</div>);
	}
}

export default States;
