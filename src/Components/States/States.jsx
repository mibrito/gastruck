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
		StatesActions.load();
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
		return (<div className="states">
			<Col md={12} className='sub-header'><h2>States</h2></Col>
			<Col md={12} className='list-states'>{
				_.map(this.state.states, function(state, key){
					return (<div key={key}><Link to={`/${state._id}`} >
						{state.name}
					</Link></div>);
				})
			}</Col>
			{/* this is the important part for react-router */}
		</div>);
	}
}

export default States;
