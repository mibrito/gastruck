import React from 'react';

import {Link} from 'react-router'; 
import {Glyphicon} from 'react-bootstrap';

class GoBack extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'GoBack';
	}
	render() {
		return (<div className="goBack">
			<Link to={this.props.goBackLink}><Glyphicon glyph="arrow-left"/></Link>
		</div>);
	}
}

GoBack.propsType = {
	goBackLink: React.PropTypes.string.isRequired
};

class Page extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'Page';
	}
	render() {
		return <div className={this.props.identifier}>{this.props.children}</div>;
	}
}

Page.propsType = {
	identifier: React.PropTypes.string.isRequired
};

class Body extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'Body';
	}
	render() {
		return <div className="body">{this.props.children}</div>;
	}
}

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'Footer';
	}
	render() {
		return <div className="footer">{this.props.children}</div>;
	}
}

export default {
	Page,
	Body,
	Footer,
	GoBack
};
