import React from 'react';

import {Row} from 'react-bootstrap';

import MainStore from '../Flux/Main/MainStore';
import MainActions from '../Flux/Main/MainActions';

class Stations extends React.Component {
	constructor(props){
		super(props);

		this.state = MainStore.getState();
		this._onStoreChange = this._onStoreChange.bind(this);
	}

	componentWillMount() {
		MainActions.load();
	}

	componentDidMount() {
		MainStore.listen(this._onStoreChange);
	}

	componentWillUnmount() {
		MainStore.unlisten(this._onStoreChange);
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
