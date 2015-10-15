import _ from 'lodash'
import React from 'react';

// components
import {Link} from 'react-router'; 

class PanelBox extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'PanelBox';
	}

	render() {
		var vector = this.props.vector;
		var pathname = this.props.pathname;
		var top = this.props.top;
		var truncate = this.props.truncate || false;
		return (
			<div className="cities-list panelbox">
				<div className="panelbox-container header">
					<div className="top">Stations</div>
					<div className="bottom">City</div>
				</div>
				{
					vector && _.map(vector, function(item, key){
						return (<Link to={`${pathname}/${item._id}`} key={key}>
							<div className="panelbox-container">
								<div className="top">{item[top] ? item[top].length : 0 }</div>
								<div className="bottom">{truncate ? _.trunc(item.name, 16): item.name }</div>
							</div>
						</Link>);
					})
				}
			</div>
		);
	}
}

PanelBox.propTypes = {
	vector: React.PropTypes.any.isRequired,
	pathname: React.PropTypes.string.isRequired,
	top: React.PropTypes.string.isRequired
}

export default PanelBox;
