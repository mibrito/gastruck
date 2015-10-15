import _ from 'lodash';
import React from 'react';

// components
import {Link} from 'react-router'; 
import {Col, Row, Panel} from 'react-bootstrap';
import PanelBox from '../Lib/PanelBox';
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
		//console.log(state.states)
		this.setState(state);
	}

	render() {
		var states = this.state.states || {};
		return (<div className="states">
			<PanelBox vector={states} pathname="/" top="cities" />
		</div>);
	}
}

export default States;
