import React from 'react';
import d3Chart from './d3Chart';

class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'Chart';
    }

    componentDidMount() {
		var el = this.getDOMNode();
		d3Chart.create(el, {
			width: '100%',
			height: '300px'
		}, this.getChartState());
	}

	componentDidUpdate() {
		var el = this.getDOMNode();
		d3Chart.update(el, this.getChartState());
	}

	getChartState() {
		return {
			data: this.props.data,
			domain: this.props.domain
		};
	}

	componentWillUnmount() {
		var el = this.getDOMNode();
		d3Chart.destroy(el);
	}

    render() {
        return <div className = "Chart" > < /div>;
    }
}

Chart.propTypes = {
	data: React.PropTypes.array,
	domain: React.PropTypes.object
};

export default Chart;