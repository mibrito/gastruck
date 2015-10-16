import React from 'react';

import {Link} from 'react-router'; 
import {Row, Col} from 'react-bootstrap';

// flux
import MetadataStore from '../../Flux/Metadata/MetadataStore';
import MetadataActions from '../../Flux/Metadata/MetadataActions';

// lib
import formatDate from '../../JSLib/formatDate';

class MainComponent extends React.Component {
	constructor(props){
		super(props);
		this.displayName = 'MainComponent';

		this.state = MetadataStore.getState();
		this._onStoreChange = this._onStoreChange.bind(this);
	}

	componentWillMount() {
		MetadataActions.loadDates();
	}

	componentDidMount() {
		MetadataStore.listen(this._onStoreChange);
	}

	componentWillUnmount() {
		MetadataStore.unlisten(this._onStoreChange);
	}

	_onStoreChange(state){
		this.setState(state);
	}

	render () {
		return (
			<div className="container-fluid app">
				<Col md={12} className="logo"><Link to="/">
					<h1>
						<span className="logo-gas">Gas</span>
						<span className="logo-truck">Truck</span>
					</h1>
					<footer className="crawl-dates">
						From {formatDate(this.state.dates.from, '/')}
						&nbsp;To&nbsp;{formatDate(this.state.dates.to, '/')} <br/>
						Brazilian Gas Stations
					</footer>
				</Link></Col>
				{/* this is the important part for react-router */}
				<Col md={12} className="body">
					{this.props.children}
				</Col>
				<Col md={12}></Col>
			</div>
		);
	}
}

MainComponent.displayName = 'MainComponent';

export default MainComponent;