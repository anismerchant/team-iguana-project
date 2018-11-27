import React, { Component } from 'react';
import PropTypes from 'prop-types';

const countryList = require('country-list');
countryName = countryList.getName();
warehouseName = React.createRef();
street = react.creatRef();
city = react.createRef();
country = react.createRef();
postalCode = react.createRef();
managerName = react.createRef();
phone = react.createRef();
email = react.createRef();
inventoryType = react.createRef();

class Modal extends Component {
    submitHandler = (e,warhouseName,street,city,country,postCode,manager,phone, email,inventoryType) =>{
        this.warehouseName.current.value === null ?alert('Enter warehouse name!'): warehouseName = this.warehouseName.current.value;
        this.street.current.value === null ? alert('Enter street name!'): street = this.street.current.value;
        this.city.current.value === null ? alert('Enter city name!'): city = this.city.current.value;
        this.country.current.value === null ? alert('Select a country!'): country = this.country.current.value;
        this.postalCode.current.value === null ? alert('Enter postal code!'): postCode = this.postalCode.current.value;
        this.managerName.current.value === null ? alert("Enter mananger's name"): manager = this.managerName.current.value;
        this.phone.current.value === null ? alert('Enter phone number!'): phone = this.phone.current.value;
        this.email.current.value === null ? alert('Enter email address!'): email = this.email.current.value;
        this.inventoryType === null ? alert('Select an inventory type!'): inventoryType = this.inventoryType.current.value;
        const body = {
            warehouseName: this.warehouseName,
            street: this.street,
            city: this.city,
            country:this.country,
            postCode:this.postCode,
            manager: this.manager,
            phone:this.phone,
            email:this.email,
            inventoryType: this.inventoryType
        }
        baseUrl = 'http://localhost:8080';

        fetch(baseUrl$, {
            method:"POST",
            headers:{"Content-Type" :"application/json"},
            body: JSON.stringify(body)
        })
    }
    render() {
        return (
            <div style={{...flex, display: this.props.isOpen ? 'flex' : 'none'}}>
                <div className='modal-layer' onClick={this.props.handleClose} style={modalLayer}></div>
                <div className="form-container" style={formModal}>
                    <h1>Add a new storage location</h1>
                    <form className="form" onSubmit={this.submitHandler}>
                        <label>
                            Warehouse Name
                            <input type="text" name="warehouseNameInput" ref="warehouseName"/>
                        </label>
                        <div className="form__wrapper">
                            <div className="form__address">
                                <label>
                                    Street Number & name
                                    <input type="text" name="streetInput" ref="street"/>
                                </label>
                                <label>
                                    City
                                    <input type="text" name="cityInput" ref="city"/>
                                </label>
                                <label>
                                    Country
                                    <select name="country" ref="country">
                                        {
                                            countryName.map(country =>{
                                                <option>
                                                    {country}
                                                </option>
                                            })
                                        }
                                    </select>
                                </label>
                                <label>
                                    Postal Code
                                    <input type="text" name="postalCodeInput" ref="postalCode"/>
                                </label>
                            </div>
                            <div className="form__contactInfo">
                                <label>
                                    Warehouse Manager's Name
                                    <input type="text" name="managerNameInput" ref="managerName"/>
                                </label>
                                <label>
                                    Phone Number
                                    <input type="text" name="PhoneInput" ref="phone"/>
                                </label>
                                <label>
                                    Email Address
                                    <input type="text" name="emailInput" ref="email"/>
                                </label>
                                <label>
                                    Inventory type
                                    <select name="InventoryTypeInput" ref="inventorytype">
                                        <option></option>
                                        <option></option>
                                        <option></option>
                                    </select>
                                </label>
                            </div>
                        </div>
                        <input className="form__button" type="submit" value="Save Location"/>
                    </form>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    handleClose: PropTypes.func.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default Modal;

const flex = {
    position: 'fixed',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100vw',
    height: '100vh',
    zIndex: 1,
    overflow: 'hidden',
    backgroundColor: 'rgba(57,57,57,0.6)',
};

const modalLayer = {
    position: 'fixed',
    width: '100vw',
    height: '100vh',
    zIndex: 1,
    backgroundColor: 'transparent'
  };
  
  const formModal = {
    position: 'absolute',
    color: 'rgb(57,57,57)',
    backgroundColor: '#FFFFFF',
    width: '600px',
    maxWidth: '100%',
    height: '600px',
    maxHeight: '100%',
    zIndex: 2,
    borderRadius: '3px',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column'
  };