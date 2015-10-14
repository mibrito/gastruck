import React from 'react';

import {Row, Col} from 'react-bootstrap';

// flux
import CrawlInfoStore from '../Flux/CrawlInfo/CrawlInfoStore';
import CrawlInfoActions from '../Flux/CrawlInfo/CrawlInfoActions';

// lib
import formatDate from '../Lib/formatDate';

class MainComponent extends React.Component {
	constructor(props){
		super(props);
		this.displayName = 'MainComponent';

		this.state = CrawlInfoStore.getState();
		this._onStoreChange = this._onStoreChange.bind(this);
	}

	componentWillMount() {
		CrawlInfoActions.loadDates();
	}

	componentDidMount() {
		CrawlInfoStore.listen(this._onStoreChange);
	}

	componentWillUnmount() {
		CrawlInfoStore.unlisten(this._onStoreChange);
	}

	_onStoreChange(state){
		this.setState(state);
	}

	render () {
		return (
			<div className="container-fluid app-body">
				<Col md={12} className="logo"><h1>
					<span className="logo-gas">Gas</span>
					<span className="logo-truck">Truck</span>
					</h1>
					<footer className="crawl-dates">
						From {formatDate(this.state.dates.from, '/')}
						&nbsp;To&nbsp;{formatDate(this.state.dates.to, '/')}
					</footer>
				</Col>
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