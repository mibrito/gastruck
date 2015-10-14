import _ from 'lodash';
import React from 'react';

// components
import {Link} from 'react-router'; 
import {Col, Row} from 'react-bootstrap';

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
		console.log(state);
		this.setState(state);
	}

	render() {
		var station = this.state.stations[this.props.params.station] || {};
		return (<div className="station">
			<Col className="sub-header"><h2>Prices of {station.name || ''}</h2></Col>
			<Col className="about">Address: {station.address},{station.area}</Col>
			<Col className="prices">{
				station.prices && _.map(station.prices, function(price, key){
					return (<div key={key}>
						<b>{price.fuelType}</b>
						<p>Buy Price: {price.buyPrice}</p>
						<p>Sell Price: {price.sellPrice}</p>
						<p>Sale Mode: {price.saleMode}</p>
						<p>Provider: {price.provider}</p>
						<p>Date: {price.date}</p>
					</div>);
				})
			}</Col>
		</div>);
	}
}

export default Stations;
