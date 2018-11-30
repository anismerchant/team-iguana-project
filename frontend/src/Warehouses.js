import React from 'react';
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

    <div className="warehouses">
        <div className="warehouses__header">
            <h3 className="warehouses__header--upperLeft">
            Locations
            </h3>
            <div className="warehouses__header--lowerRight">
            Filter
            </div>
        </div>
        <div className="warehouses__grid">
            {warehouseList.map((warehouses, index) => {
                return <Link key={index} to={`/warehouses/${warehouses.warehouse_id}`}>
                    <WarehouseChild 
                        wareState={this.state.warehouses}
                        key={index}
                        wareId={warehouses.warehouse_id}
                        wareCity={warehouses.city}
                        wareCountry={warehouses.country}
                        wareAddress={warehouses.address_street}
                        warePostalCode={warehouses.postal_code}
                        wareManager={warehouses.manager_name}
                        warePhone={warehouses.phone_num}
                        wareType={warehouses.type}
                        wareMail={warehouses.email}
                    /></Link>
                })    
            }
        </div>
    </div>
        );
    }
}