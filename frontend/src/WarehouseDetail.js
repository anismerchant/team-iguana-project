import React from 'react';
import WarehouseDetailChild from './WarehouseDetailChild';

export default class WarehouseDetail extends React.Component {

    state = {
        warehouseDetail: []
    }

    componentDidMount(prevProps, prevState) {
        const baseUrl = 'http://localhost:8080';
        let warehousesPath = '/warehouses/';
        let currId = this.props.warehouseId;

        fetch(baseUrl + warehousesPath + currId)
           .then((response) => {
               return response.json();
           })
           .then((data) => {
               return this.setState({warehouseDetail: data})
           })
           .catch( (err) => {
               console.log(err);
           })
    }

    render() {

        let wareObj = this.state.warehouseDetail;

        return (
        <div className="warehouseDetailed">
            <div className="warehouseDetailed__header">
                {'Warehouse number'+' '}{this.props.warehouseId}{' '+'holds:'+' '}
            </div>
            {wareObj.map((warehouseDetail, index) => {
                return <div key={index}>
                    <WarehouseDetailChild 
                        wareDetailState={this.state.warehouseDetail}
                        key={index}
                        warehouseDetail={warehouseDetail.warehouse_id}
                        productName={warehouseDetail.name}
                        prodDescription={warehouseDetail.description}
                        prodLastOrder={warehouseDetail.last_ordered}
                        prodCategory={warehouseDetail.category}
                        stockStatus={warehouseDetail.status}
                    /></div>
                })    
            }
        </div>
        );
    }
}
