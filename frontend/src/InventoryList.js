import React from 'react';
import InventoryListChild from './InventoryListChild';
import { Link } from 'react-router-dom';

/* setup const for baseUrl and inventory path */
const baseUrl = 'http://localhost:8080';
const inventoryListPath = '/inventory';

export default class InventoryList extends React.Component {
    
    // Monitor State
    state = {
        inventory: []
    }

    // Fetch all inventory list once component mounts:
    componentDidMount(prevProps, prevState) {
        fetch(baseUrl + inventoryListPath)
           .then((response) => {
               return response.json();
           })
           .then((data) => {
               return this.setState({inventory: data})
           })
           .catch( (err) => {
               console.log(err);
           })
    }

    render() {
        console.log(this.state.inventory);
        let inventoryArray = this.state.inventory;
        
        return (
            <div className="inventoryList__container">
                <div className="inventoryList--heading-container">
                    <div className="inventoryList--heading">
                        <h1>Inventory</h1>
                    </div>
                    <div className="inventoryList--filter">
                        <h2>Filter</h2>
                    </div>
                </div>
                <div className="inventoryList--main-container">
                    <div className="inventoryList__form--product-heading">
                        <div className="inventoryList__form--product-heading-group"> 
                            <div className="inventoryList__form--item">
                                <h3>ITEM</h3>
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
                        <div className="spaceBlock"></div>   
                    </div>
                    {/* PRODUCT DETAILS RECEIVED AS PROPS FROM PARENT */}    
                    {inventoryArray.map((inventory, index) => {
                        return <Link className={(index % 2 === 0) ? "white" : "grey"} key={index} to={`/inventory/${inventory.id}`}>
                            <InventoryListChild 
                                inventoryState={this.state.inventory}
                                key={index}
                                productName={inventory.name}
                                productWarehouseId={inventory.warehouse_id}
                                productDesc={inventory.description}
                                productLastOrdered={inventory.last_ordered}
                                productOrderedBy={inventory["ordered by"]}
                                productRefNum={inventory.refNum}
                                productCategory={inventory.category}
                                productQuantity={inventory.quantity}
                                productLocation={inventory.location}
                                productStatus={inventory.status}
                            /></Link>
                        })    
                    }
                </div>
            </div>
        );
    }
}