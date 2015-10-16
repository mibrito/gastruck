import _ from 'lodash';
import React from 'react';

import {Col, Row} from 'react-bootstrap';

class PanelStatisticsCard extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'PanelStatisticsCard';
    }
    render() {
    	let vector = this.props.vector;
        return (<div className="panelstatisticscard">
        	{
				vector && _.map(vector, function(item, key){
					return (<Col md={6} className="card" key={key}>
						<Row className="card-container">
							<Col md={12} className="header"><h4>{item.fuelType}</h4></Col>
							<Col md={12} className="body">
								<Col md={6}>
									<b>Consumer Price</b><br />
									<span>Average Margin: {item.consumerPrice[0].averageMargin}</span><br />
									<span>Average Price: {item.consumerPrice[0].averagePrice}</span><br />
									<span>Max Price: {item.consumerPrice[0].maxPrice}</span><br />
									<span>Min Price: {item.consumerPrice[0].minPrice}</span><br />
								</Col>
								<Col md={6}>
									<b>Distribution Price</b><br />
									<span>Average Margin: {item.distributionPrice[0].averagePrice}</span><br />
									<span>Standard Deviation: {item.distributionPrice[0].standardDeviation}</span><br />
									<span>Max Price: {item.distributionPrice[0].maxPrice}</span><br />
									<span>Min Price: {item.distributionPrice[0].minPrice}</span><br />
								</Col>
							</Col>
						</Row>
					</Col>);
				})
			}
        </div>);
    }
}

export default PanelStatisticsCard;
