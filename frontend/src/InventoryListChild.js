import React from 'react';

export default class InvventoryListChild extends React.Component {

    render() {
        return (
            <div className="inventoryList__form--product-details">
                <div className="inventoryList__form--product-details-group">
                    <div className="inventoryList__form--product-name-container">
                        <h3  className="inventoryList__form--product">Product Name</h3>
                        <h3 className="inventoryList__form--product-desc">Product Description</h3>
                    </div>
                    <div className="inventoryList__form--date-container">
                        <h3 className="inventoryList__form--date">05/24/2018</h3>
                    </div>
                    <div className="inventoryList__form--city-province-container">
                        <h3 className="inventoryList__form--city-province">Toronto, CAN</h3>
                    </div>
                    <div className="inventoryList__form--quantity-number-container">
                        <h3 className="inventoryList__form--quantity-number">12,000</h3>
                    </div>
                    <div className="inventoryList__form--quantity-in-stock-container">
                        <h3 className="inventoryList__form--in-stock">In Stock</h3>
                    </div>
                </div>
                <button className="inventoryList__form--delete-product">x</button>                        
            </div>
        )
    }
}