import React from 'react';

export default class InvventoryListChild extends React.Component {

    render() {
        return (
            <div className={`inventoryList__form--product-details ${this.props.className}`}>
                <div className="inventoryList__form--product-details-group">
                    <div className="inventoryList__form--product-name-container">
                        <h3  className="inventoryList__form--product">{this.props.productName}</h3>
                        <h3 className="inventoryList__form--product-desc">{this.props.productDesc}</h3>
                    </div>
                    <div className="inventoryList__form--date-container">
                        <h3 className="inventoryList__form--date">{this.props.productLastOrdered}</h3>
                    </div>
                    <div className="inventoryList__form--city-province-container">
                        <h3 className="inventoryList__form--city-province">{this.props.productLocation}</h3>0p
                    </div>
                    <div className="inventoryList__form--quantity-number-container">
                        <h3 className="inventoryList__form--quantity-number">{this.props.productQuantity}</h3>
                    </div>
                    <div className="inventoryList__form--quantity-in-stock-container">
                        <h3 className="inventoryList__form--in-stock">{this.props.productStatus}</h3>
                    </div>
                </div>
                <button className="inventoryList__form--delete-product">x</button>                        
            </div>
        )
    }
}