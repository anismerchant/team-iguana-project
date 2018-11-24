import React from 'react';

export default class InventoryList extends React.Component {

    render() {

        return (
            
            <div className="inventoryList__container">
                <div className="inventoryList--heading-container">
                    <div className="InventoryList--heading">
                        <h1 >Inventory</h1>
                    </div>
                    <div className="InventoryList--filter">
                        <h2 alt="filter">Filter</h2>
                    </div>
                </div>
                <div className="inventoryList--main-container">
                    <div className="inventoryList__form--product-heading"> 
                        <div className="inventoryList__form--item">
                            <h3 >ITEM</h3>
                        </div>
                        <div className="inventoryList__form--lastOrdered">
                            <h3>LAST ORDERED</h3>
                        </div>
                        <div className="inventoryList__form--location">
                            <h3>LOCATION</h3>
                        </div>
                        <div className="inventoryList__form--quantity">
                            <h3>QUANTITY</h3>
                        </div>
                        <div className="inventoryList__form--status">
                            <h3>STATUS</h3>
                        </div>
                    </div>
                    <div className="InventoryList__form--product-details">
                        <div className="inventoryList__form--product-name-container">
                            <h3  className="inventoryList__form--product">Product Name</h3>
                            <h3 className="inventoryList__form--product-desc">Product Description</h3>
                        </div>
                        <div className="inventoryList__form--date-container">
                            <h3 className="inventoryList__form--date">05/24/2018</h3>
                        </div>
                        <div className="inventoryList__form--city-province-container">
                            <h3 className="inventoryList__form--city-province">Toronto,CAN</h3>
                        </div>
                        <div className="inventoryList__form--quantity-number-container">
                            <h3 className="inventoryList__form--quantity-number">12,000</h3>
                        </div>
                        <div className="inventoryList__form--in-stock-container">
                            <h3 className="inventoryList__form--in-stock">In Stock</h3>
                        </div>
                        <button className="inventoryList__form--delete-product">Delete</button>
                    </div>
                </div>
                    
               
            </div>
       
        );
    }
}