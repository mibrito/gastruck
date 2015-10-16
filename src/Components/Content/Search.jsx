/*
 * Component to search page
 */
import _ from 'lodash';
import React from 'react';

import {Link} from 'react-router'
import {Col, Input, Button} from 'react-bootstrap';

// flux
import FindStore from '../../Flux/Find/FindStore';
import FindActions from '../../Flux/Find/FindActions';

const minchar = 'min 3 characters to seach';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'Search';

		this.state = _.merge({search: '', menssage: minchar}, FindStore.getState());
		this._onStoreChange = this._onStoreChange.bind(this);
		this.handleInput = this.handleInput.bind(this);
		this.handleGo = this.handleGo.bind(this);
		this.handleKeyDown = this.handleKeyDown.bind(this);
	}

	componentDidMount() {
		FindStore.listen(this._onStoreChange);
	}

	componentWillUnmount() {
		FindActions.cleanAll();
		FindStore.unlisten(this._onStoreChange);
	}

	_onStoreChange(state){
		console.log(state);
		this.setState(state);
	}

	handleKeyDown (e) {
		let ENTER = 13;
		if( e.keyCode == ENTER && this.state.search.length>=3) {
			this.handleGo();
		}
	}

	handleInput(e){
		let menssage = this.state.menssage;
		if(e.target.value.length>=3) menssage = '';
		else menssage = 'min 3 characters to seach';

		this.setState({ search: e.target.value, menssage });
	}

	handleGo(){
		FindActions.find(this.state.search);
	}

	render() {
		let {cities, states, stations} = this.state.objs;
		let menssage = this.state.menssage;
		return (<div className="Search" onKeyDown={this.handleKeyDown}>
			<Col md={12} className="header">
				<Col md={12}><h2>Find</h2></Col>
				<Col md={11}><Input onChange={this.handleInput} type="text" /></Col>
				<Col md={1}><Button onClick={this.handleGo} className="btn-truck" type="button">Go</Button></Col>
				<Col md={12}><footer>{menssage}</footer></Col>
			</Col>
			<Col md={12} className="body">
				<Col md={12} className="states">
					<Col md={12}><h3>{!_.isEmpty(states) && 'States'}</h3></Col>
					<Col md={12}>{_.map(states, function(state, key){
						return (<div className="state" key={key}>
							<b>{state.name}</b> <Link to={`/id/${state._id}`}>Go</Link><br/>
							<label>Id:</label> <span>{state._id}</span><br/>
							<label>#Cities:</label> <span>{state.cities.length}</span><br/>
						</div>);
					})}</Col>
				</Col>
				<Col md={12} className="cities">
					<Col md={12}><h3>{!_.isEmpty(cities) && 'Cities'}</h3></Col>
					<Col md={12}>{_.map(cities, function(city, key){
						return (<div className="city" key={key}>
							<b>{city.name}</b> <Link to={`/id/${city.state._id}/id/${city._id}`}>Go</Link><br/>
							<label>Id:</label> <span>{city._id}</span><br/>
							<label>State:</label> <span>{city.state.name}</span> <Link to={`/id/${city.state._id}`}>Go</Link><br/>
							<label>#Stations:</label> <span>{city.stations.length}</span><br/>
							<label>#Fuels:</label> <span>{city.statistics.length}</span><br/>
						</div>);
					})}</Col>
				</Col>
				<Col md={12} className="stations">
					<Col md={12}><h3>{!_.isEmpty(stations) && 'Stations'}</h3></Col>
					<Col md={12}>{_.map(stations, function(station, key){
						return (<div className="station" key={key}>
							<b>{station.name}</b> <Link to={`/id/${station.city.state}/id/${station.city._id}/id/${station._id}`}>Go</Link><br/>
							<label>Id:</label> <span>{station._id}</span><br/>
							<label>City:</label> <span>{station.city.name}</span> <Link to={`/id/${station.city.state}/id/${station.city._id}`}>Go</Link> <br/>
							<label>#Fuels:</label> <span>{station.prices.length}</span><br/>
						</div>);
					})}</Col>
				</Col>
			</Col>
		</div>);
	}
}

export default Search;
