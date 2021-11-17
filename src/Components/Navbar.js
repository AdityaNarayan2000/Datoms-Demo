import React from 'react';
import './Navbar.css';
import {Link, NavLink} from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="Menu-Bar" style={{display:"flex"}}>
            <img className="Logo" src={"https://datoms.io/wp-content/uploads/2021/03/site_logo_datoms_iot_platform.svg"}/>
        <ul>
                
                <li className="active"><NavLink to="/">Overview</NavLink></li>
                <li><NavLink to="/systems">Systems</NavLink></li>
                <li><NavLink to="/faults">Faults</NavLink></li>
                <li><NavLink to="/security">Security</NavLink></li>
                <li><NavLink to="/traffic">Traffic</NavLink></li>

            </ul>
            <NavLink to="/login"><button className="loginBtn">Datoms Login</button></NavLink>
        </div>

    )
}

export default Navbar;