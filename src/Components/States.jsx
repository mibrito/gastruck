import React from 'react';

import {Row} from 'react-bootstrap';

import StatesStore from '../Flux/States/StatesStore';
import StatesActions from '../Flux/States/StatesActions';

class States extends React.Component {
	constructor(props){
		super(props);

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
		return (
			<div>{this.state.states}</div>
		);
	}
}

States.displayName = 'States';

export default States;
