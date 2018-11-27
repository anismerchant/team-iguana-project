import React from 'react';
import WarehouseDetail from './WarehouseDetail';
import WarehouseChild from './WarehouseChild';
import { Link } from 'react-router-dom';

const baseUrl = 'http://localhost:8080';
const warehousesPath = '/warehouses';

export default class Warehouses extends React.Component {

    state = {
        warehouses: []
    }

    componentDidMount(prevProps, prevState) {
        fetch(baseUrl + warehousesPath)
           .then((response) => {
               return response.json();
           })
           .then((data) => {
               return this.setState({warehouses: data})
           })
           .catch( (err) => {
               console.log(err);
           })
    }

    
    
    render() {
        
let warehouseList = this.state.warehouses;

        return (

    <div className="warehouses">Locations
        <div className="warehouses__grid">
            {warehouseList.map((warehouses, index) => {
                return <Link key={index} to={`/warehouses/${warehouses.warehouse_id}`}>
                    <WarehouseChild 
                        wareState={this.state.warehouses}
                        key={index}
                        warehouseId={warehouses.warehouse_id}
                        warehouseAddress={warehouses.address}
                        warehouseContact={warehouses.contact}
                        warehouseType={warehouses.type}
                    /></Link>
                })    
            }
        </div>
    </div>
        );
    }
}