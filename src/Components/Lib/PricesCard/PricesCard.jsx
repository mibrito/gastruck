import _ from 'lodash';
import React from 'react';

import {Col, Row} from 'react-bootstrap';
import formatDate from '../../../JSLib/formatDate';

class PricesCard extends React.Component {
    constructor(props) {
        super(props);
        this.displayName = 'PricesCard';
    }
    render() {
    	let prices = this.props.prices || [];
        return (<div className="PricesCard">
        	{
				_.map(prices, function(price, key){
					return (<Col xs={12} md={6} className="card" key={key}>
						<Row className="card-container">
						<Col xs={12} md={12} className="header"><h4>{price.fuelType}</h4></Col>
						<Col xs={12} md={12} className="body">
							<label>Buy Price:</label> <span>{price.buyPrice}</span><br />
							<label>Sell Price:</label> <span>{price.sellPrice}</span><br />
							<label>Sale Mode:</label> <span>{price.saleMode}</span><br />
							<label>Provider:</label> <span>{formatDate(price.provider,'/')}</span><br />
							<label>Date:</label> <span>{formatDate(price.date,'/')}</span><br />
						</Col>
						</Row>
					</Col>);
				})
			}
        </div>);
    }
}

PricesCard.propTypes = {
	prices: React.PropTypes.array.isRequired
}

export default PricesCard;
