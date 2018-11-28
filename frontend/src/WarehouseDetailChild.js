import React from 'react';

export default class WarehouseDetailChild extends React.Component {

    render() {
        return (
        <div className="warehouseDetailed__box">
            <div className="warehouseDetailed__box--upper">
                {this.props.productName}
            </div>
            <div className="warehouseDetailed__box--lower">
                {this.props.prodDescription}
            </div>
            <div>
                {this.props.prodCategory}
            </div>
            <div>
                {this.props.stockStatus}
            </div>
        </div>
        )
    }
}