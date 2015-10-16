/*
	Main component responsible for loading all the child routes
 */

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

	componentWillUpdate(nextProps, nextState) {
		var isCoverPage = (nextProps.location.pathname.length === 1);
		document.body.className = isCoverPage ? 'cover' : '';
	}

	componentWillUnmount() {
		MetadataStore.unlisten(this._onStoreChange);
	}

	_onStoreChange(state){
		this.setState(state);
	}

	render () {
		var isCoverPage = (this.props.location.pathname.length === 1);

		return (
			<div className={'container-fluid app'}>
				{isCoverPage && <div className="app-cover">
					<Col md={12} className="logo-cover">
						<Link to="/i"><h1>
							<span className="logo-gas">Gas</span>
							<span className="logo-truck">Truck</span>
						</h1>
						<p>Data about gas stations prices of Brazil</p></Link>
					</Col>
				</div>}
				{!isCoverPage && <div className="app-box">
					<Col md={12} className="logo">
						<Link to="/"><h1>
							<span className="logo-gas">Gas</span>
							<span className="logo-truck">Truck</span>
						</h1></Link>
						<footer className="crawl-dates">
							From {formatDate(this.state.dates.from, '/')}
							&nbsp;To&nbsp;{formatDate(this.state.dates.to, '/')} <br/>
							Brazilian Gas Stations
						</footer>
					</Col>

				
					<Col md={12} className="body">
						{this.props.children}
					</Col>
				</div>}

			</div>
		);
	}
}

MainComponent.displayName = 'MainComponent';

export default MainComponent;