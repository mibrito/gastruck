import React from 'react';

// component
import {Link} from 'react-router';

class Index extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'Index';
	}
	render() {
		return (<div className="Index">
			<Link to="/box">Box</Link>
		</div>);
	}
}

export default Index;
