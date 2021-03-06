/*
 * Reusable component, used to create the box selector
 */
import _ from 'lodash'
import React from 'react';

// components
import {Link} from 'react-router';
import {Col, Glyphicon} from 'react-bootstrap';

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
		// pathname = pathname === '/i/' ? '' : pathname;

		// console.log(pathname);

		var rootPathname = pathname.split('/');
		rootPathname = rootPathname.slice(0,rootPathname.length-1).join('/'); // remove the last item

		var boxes = _.map(vector, function(item, key){
			return (<Link to={`${pathname}/${item._id}`} key={key}>
				<Col xs={6} md={2} className="panelbox-container">
					<div className="top">{item[top] ? item[top].length : 0 }</div>
					<div className="bottom">{truncate ? _.trunc(item.name, 20): item.name }</div>
				</Col>
			</Link>);
		});
		

		return (
			<div className="cities-list panelbox" ref="panelbox">
				<Link to={`${rootPathname}`}>
					<Col md={12} className="panelbox-container header" ref="header"
						onMouseOver={this.handleMouseOver}
						onMouseOut={this.handleMouseOut}
					>
						<div className="top">Choose</div>
						<div className="bottom">One {this.props.bottomDescription}</div>
					</Col>
				</Link>
				{boxes}
				<Link to="/search">
					<Col xs={6} md={2} className="panelbox-container search" ref="search" >
						<div className="top"><Glyphicon glyph="search"/></div>
						<div className="bottom">Search</div>
					</Col>
				</Link>
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
