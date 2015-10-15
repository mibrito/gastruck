import _ from 'lodash';
import React from 'react';

// components
import {Link} from 'react-router'; 
import {Col, Row, Glyphicon} from 'react-bootstrap';

import {Page, Body, Footer, GoBack} from '../Lib/Utils/Utils';
import PricesCard from '../Lib/PricesCard/PricesCard';

// flux
import StationsStore from '../../Flux/Stations/StationsStore';
import StationsActions from '../../Flux/Stations/StationsActions';

class Stations extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'StationsDetails';

		this.state = StationsStore.getState();
		this._onStoreChange = this._onStoreChange.bind(this);
	}

	componentWillMount() {
		StationsActions.loadOne(this.props.params.station);
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
		let station = this.state.stations[this.props.params.station] || {};
		let goBackLink = this.props.location.pathname.split('/');
		goBackLink = goBackLink.slice(1,goBackLink.length-1).join('/');

		return (<Page identifier="station">
			<Body>
				<div className="sub-header">
					<h2>{station.name || ''}</h2>
					<footer className="about">{[station.address, station.area].join('/ ')}</footer>
				</div>

				<h3>Prices</h3>
				<PricesCard prices={station.prices || []} />
			</Body>
			<Footer>
				<GoBack goBackLink={'/'+goBackLink} />
			</Footer>
		</Page>);
	}
}

export default Stations;
