import React from 'react';

export default class WarehouseDetail extends React.Component {

    state = {
        warehouseDetail: []
    }

    componentDidMount(prevProps, prevState) {
        const baseUrl = 'http://localhost:8080';
        let warehousesPath = '/warehouses';
        let specificId = '/';

        fetch(baseUrl + warehousesPath)
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
        // console.log(this.state.warehouseDetail);
        return (
            <div className="warehouseDetailed">

            </div>
        );
    }
}

/*
set up state, an array

*/