import React from 'react';

import {Row} from 'react-bootstrap';



class MainComponent extends React.Component {
	constructor(props){
		super(props);
	}

	render () {
		return (
			<div className="container-fluid app-body">
				{/* this is the important part */}
				<Row className="body">
					{this.props.children}
				</Row>
			</div>
		);
	}
}

MainComponent.displayName = 'MainComponent';

export default MainComponent;