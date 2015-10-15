import _ from 'lodash'
import React from 'react';

// components
import {Link} from 'react-router';

class PanelBox extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'PanelBox';

		this.handleMouseOver = this.handleMouseOver.bind(this);
		this.handleMouseOut = this.handleMouseOut.bind(this);
	}

	handleMouseOver(e){
		let header = React.findDOMNode(this.refs.header);
		let top = header.getElementsByClassName('top')[0];
		let bottom = header.getElementsByClassName('bottom')[0];

		top.innerHTML = this.props.topDescription;
		bottom.innerHTML = this.props.bottomDescription;
	}

	handleMouseOut(e){
		let header = React.findDOMNode(this.refs.header);
		let top = header.getElementsByClassName('top')[0];
		let bottom = header.getElementsByClassName('bottom')[0];

		top.innerHTML = 'Choose';
		bottom.innerHTML = 'One ' + this.props.bottomDescription;
	}

	render() {
		var vector = this.props.vector;
		var top = this.props.top;
		var truncate = this.props.truncate || false;

		var pathname = this.props.location.pathname;
		var rootPathname = pathname.split('/');
		rootPathname = rootPathname.slice(0,rootPathname.length-1).join('/'); // remove the last item
		
		var boxes = _.map(vector, function(item, key){
			return (<Link to={`${pathname}/${item._id}`} key={key}>
				<div className="panelbox-container">
					<div className="top">{item[top] ? item[top].length : 0 }</div>
					<div className="bottom">{truncate ? _.trunc(item.name, 16): item.name }</div>
				</div>
			</Link>);
		});
		

		return (
			<div className="cities-list panelbox" ref="panelbox">
				<Link to={`${rootPathname}`}>
					<div className="panelbox-container header" ref="header"
						onMouseOver={this.handleMouseOver}
						onMouseOut={this.handleMouseOut}
					>
						<div className="top">Choose</div>
						<div className="bottom">One {this.props.bottomDescription}</div>
					</div>
				</Link>
				{boxes}
			</div>
		);
	}
}

PanelBox.propTypes = {
	vector: React.PropTypes.any.isRequired,
	location: React.PropTypes.object.isRequired,
	top: React.PropTypes.string.isRequired,
	topDescription: React.PropTypes.string.isRequired,
	bottomDescription: React.PropTypes.string.isRequired
}

export default PanelBox;
