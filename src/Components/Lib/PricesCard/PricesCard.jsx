import _ from 'lodash';
import React from 'react';

import {Col, Row} from 'react-bootstrap';

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
					return (<div className="card" key={key}>
						<div className="header" md={12}><h4>{price.fuelType}</h4></div>
						<div className="body">
							<b>{price.fuelType}</b><br />
							<span>Buy Price: {price.buyPrice}</span><br />
							<span>Sell Price: {price.sellPrice}</span><br />
							<span>Sale Mode: {price.saleMode}</span><br />
							<span>Provider: {price.provider}</span><br />
							<span>Date: {price.date}</span><br />
						</div>
					</div>);
				})
			}
        </div>);
    }
}

PricesCard.propTypes = {
	prices: React.PropTypes.array.isRequired
}

export default PricesCard;
