import React from 'react';
import {Link} from 'react-router-dom';

import iconLocation from "../../../assets/images/location_icon.svg";

import "./Header.scss";

function Header({townValue}) {
    townValue = (townValue && townValue.length)? townValue : "Ульяновск";

    return (
        <header className="page_header">
            <Link to="/" className="logo">Need for drive</Link>
            <div className="page_header__location">
                <div className="icon">
                    <img src={iconLocation} alt="iconLocation" />
                </div>
                <div 
                    type="text" 
                    className="locality"
                    style={{width: `${townValue.length * 8}px`}}
                >
                    {townValue}
                </div>
            </div>
        </header>
    )
}

export default Header;
