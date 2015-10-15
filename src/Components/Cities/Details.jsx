import _ from 'lodash';
import React from 'react';

// components
import {Link} from 'react-router'; 
import {Col, Row} from 'react-bootstrap';
import PanelBox from '../Lib/PanelBox';

// flux
import CitiesStore from '../../Flux/Cities/CitiesStore';
import CitiesActions from '../../Flux/Cities/CitiesActions';

class Cities extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'CitiesDetails';

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
		console.log(state);
		this.setState(state);
	}

	render() {
		var city = this.state.cities[this.props.params.city] || {};
		var pathname = this.props.location.pathname;
		return (<div className="Cities">
			<Col xs={12} md={12} className="sub-header"><h2>{city.name || ''}</h2></Col>
			<Col xs={12} md={6}>
			<h3>Statistics</h3>
			{
				city.statistics && _.map(city.statistics, function(statistic, key){
					return (<div key={key}>
						<Col md={12}><h4>{statistic.fuelType}</h4></Col>
						<Col md={5}>
							<b>Consumer Price</b>
							<p>Average Margin: {statistic.consumerPrice[0].averageMargin}</p>
							<p>Average Price: {statistic.consumerPrice[0].averagePrice}</p>
							<p>Max Price: {statistic.consumerPrice[0].maxPrice}</p>
							<p>Min Price: {statistic.consumerPrice[0].minPrice}</p>
						</Col>
						<Col md={5}>
							<b>Distribution Price</b>
							<p>Average Margin: {statistic.distributionPrice[0].averagePrice}</p>
							<p>Standard Deviation: {statistic.distributionPrice[0].standardDeviation}</p>
							<p>Max Price: {statistic.distributionPrice[0].maxPrice}</p>
							<p>Min Price: {statistic.distributionPrice[0].minPrice}</p>
						</Col>
					</div>);
				})
			}</Col>
			<Col xs={12} md={6}>
				<h3>Stations</h3>

				<PanelBox vector={city.stations || []} pathname={pathname} top="prices" truncate />
			</Col>
		</div>);
	}
}

export default Cities;
