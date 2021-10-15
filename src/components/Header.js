import React from 'react'
import {
    BrowserRouter as Router,
    NavLink
 } from 'react-router-dom'

const Header = () => {
    return (
        <div className="header">
            <div className="header__nav">
                <div className="header__nav--logo">
                    <NavLink
                        exact
                        style={{
                            color: '#000', 
                            textDecoration: 'none'
                        }}
                        to="/"
                    >
                        Denali
                    </NavLink>
                </div>
                <ul className="header__categories">
                    <li className="header__nav--category">
                        <NavLink 
                            exact 
                            activeStyle={{color: '#000'}}
                            to="/" 
                            className="header__nav--link"
                        >Home
                        </NavLink>
                    </li>
                    <li className="header__nav--category">
                        <NavLink 
                            exact
                            activeStyle={{color: '#000'}}
                            to="/about" 
                            className="header__nav--link"
                            >About
                        </NavLink>
                    </li>
                    <li className="header__nav--category">
                        <NavLink 
                            exact
                            activeStyle={{color: '#000'}}
                            to="/contact" 
                            className="header__nav--link"
                            >Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Header
