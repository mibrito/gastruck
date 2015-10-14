
import React from 'react';

import {Row} from 'react-bootstrap';

import StationsStore from '../../Flux/Stations/StationsStore';
import StationsActions from '../../Flux/Stations/StationsActions';

class Stations extends React.Component {
	constructor(props){
		super(props);

		this.state = StationsStore.getState();
		this._onStoreChange = this._onStoreChange.bind(this);
	}

	componentWillMount() {
		StationsActions.load();
	}

	componentDidMount() {
		StationsStore.listen(this._onStoreChange);
	}

	componentWillUnmount() {
		StationsStore.unlisten(this._onStoreChange);
	}

	_onStoreChange(state){
		this.setState(state);
	}

	render() {
		return (
			<div>{this.state}</div>
		);
	}
}

Stations.displayName = 'Stations';

export default Stations;
