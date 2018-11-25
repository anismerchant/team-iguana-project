import React, { Component } from 'react';

class Sidebar extends Component {
    render() {
         return (
            <form className="sidebar" id="sidebarForm">
                    <img src="./Assets/wordmark/wordmark.svg" className="sidebar__topLogo"/>
                    <div className="sidebar__links">
                        <button className="sidebar__links--link">
                            <img src="./Assets/Icons/Inventory.svg" className="sidebar__links--img"/>
                        Inventory</button>
                        <button className="sidebar__links--link">
                            <img src="./Assets/Icons/Location.svg" className="sidebar__links--img"/>
                        Locations</button>
                        <button className="sidebar__links--link">
                            <img src="./Assets/Icons/User.svg" className="sidebar__links--img"/>
                        Users</button>
                    </div>
                    <div className="sidebar__bottomVersionText">Version 1.0</div>
            </form>
         )
    }
}

export default Sidebar;

