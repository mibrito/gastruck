/* 
 * Render page with the details of each state
 */
import _ from 'lodash';
import React from 'react';

// components
import {Link} from 'react-router'; 
import {Col, Row} from 'react-bootstrap';
import PanelBox from '../Lib/PanelBox/PanelBox';

// flux
import StatesStore from '../../Flux/States/StatesStore';
import StatesActions from '../../Flux/States/StatesActions';

class State extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'State';

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

		return (<div className="State">
			<PanelBox
				vector={state.cities|| []}
				location={this.props.location}
				top="stations"
				topDescription="Stations"
				bottomDescription="City"
				truncate
			/>
		</div>);
	}
}

export default State;
