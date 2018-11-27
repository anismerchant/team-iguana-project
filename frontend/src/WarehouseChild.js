import React from 'react';

export default class WarehouseChild extends React.Component {

    render() {
        return (
        <div className="warehouseBox">
            <h3 className="warehouseBox__upper">{'Warehouse Number' + ' '}{this.props.warehouseId}</h3>
            <div className="warehouseBox__lower">
                <div className="warehouseBox__lower--leftContainer">
                    <h4 className="warehouseBox__lower--header">ADDRESS</h4>
                    <div className="warehouseBox__lower--leftContainer__addressDetail">
                    {this.props.warehouseAddress}
                    </div>
                </div>
                <div className="warehouseBox__lower--centralContainer">
                    <h4 className="warehouseBox__lower--header">CONTACT</h4>
                    <div>
                    {this.props.warehouseContact}
                    </div>
                </div>
                <div className="warehouseBox__lower--rightContainer">
                    <h4 className="warehouseBox__lower--header">INVENTORY TYPE:</h4>
                    <div className="warehouseBox__lower--rightContainer__type">
                    {this.props.warehouseType}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}