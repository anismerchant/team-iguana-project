import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
         return (
            <div className="sidebar">
                <div className="sidebar__topContainer">
                
                    <div>INSTOCK</div>
                </div>
                <div className="sidebar__links">
                    <div className="sidebar__links--Inventory">Inventory</div>
                    <div className="sidebar__links--Locations">Locations</div>
                    <div className="sidebar__links--Users">Users</div>
                </div>
                <div className="sidebar__bottomVersionText">Version 1.0</div>
            </div>
         )
    }
}

export default Sidebar;