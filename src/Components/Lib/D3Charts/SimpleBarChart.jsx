import React from 'react';
import d3 from 'd3';
import _ from 'lodash';

class SimpleBarChart extends React.Component {
	constructor(props) {
		super(props);
		this.displayName = 'Chart';

		this._chart = {};
		this._bar = {};

		this._scales = this._scales.bind(this);
	}

	componentDidMount() {
		this._chart = d3.select(React.findDOMNode(this)).append('svg')
			.attr("width", this.props.width)
			.attr("height", this.props.barHeight * this.props.data.length);
	}

	componentDidUpdate(prevProps, prevState) {
		var scale = this._scales();

		this._chart.append('svg')
			.attr("width", this.props.width)
			.attr('height', this.props.barHeight * this.props.data.length );

		this._bar = this._chart.selectAll("g")
			.data(this.props.data);

		// ENTER
		this._bar.enter().append("g")
			.attr("transform", function(d, i) { return "translate(0," + i * this.props.barHeight + ")"; }.bind(this)); // stack horizontal bars

		// UPDATE
		this._bar.append("rect")
			.attr("width", scale.x)
			.attr("height", this.props.barHeight - 1);

		// UPDATE
		this._bar.append("text")
			.attr("x", function(d) { return scale.x(d) - 3; })
			.attr("y", this.props.barHeight / 2)
			.attr("dy", ".35em")
			.text(function(d) { return d; });
	}

	componentWillUnmount() {
		this._bar.exit().remove();
		// this._chart.exit().remove();
	}

	_scales(width, data) {
		var x = d3.scale.linear()
			.range([0, this.props.width]);
			.domain([0, d3.max(this.props.data)])

		return {x};
	};

	render() {
		return <div className = "chart" > < /div>;
	}
}

SimpleBarChart.propTypes = {
	width: React.PropTypes.number.isRequired,
	barHeight: React.PropTypes.number.isRequired
};

export default SimpleBarChart;