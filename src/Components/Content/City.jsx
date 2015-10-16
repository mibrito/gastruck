/*
 * City component, used to render the info about cities
 */
import _ from 'lodash';
import React from 'react';

// components
import {Link} from 'react-router'; 
import {Col, Row} from 'react-bootstrap';
import PanelBox from '../Lib/PanelBox/PanelBox';
import PanelStatisticsCard from '../Lib/PanelStatisticsCard/PanelStatisticsCard';

// flux
import CitiesStore from '../../Flux/Cities/CitiesStore';
import CitiesActions from '../../Flux/Cities/CitiesActions';

class City extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'City';

		this.state = CitiesStore.getState();
		this._onStoreChange = this._onStoreChange.bind(this);
	}

	componentWillMount() {
		CitiesActions.loadOne(this.props.params.city);
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
		var city = this.state.cities[this.props.params.city] || {};
		return (<div className="City">
			<Col xs={12} md={12} className="sub-header"><h2>{city.name || ''}</h2></Col>
			<Col xs={12} md={12}>
				<PanelStatisticsCard vector={city.statistics} />
			</Col>
			<h3>Stations</h3>
			<PanelBox
				vector={city.stations || []}
				location={this.props.location}
				top="prices"
				topDescription="Fuels"
				bottomDescription="Station"
				truncate
			/>
		</div>);
	}
}

export default City;
