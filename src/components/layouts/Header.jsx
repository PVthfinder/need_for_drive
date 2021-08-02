import React,{useState} from 'react';

import iconLocation from "../../assets/images/location_icon.svg";

import "./Header.scss";

function Header() {
    const [locationValue, setLocationValue] = useState("Ульяновск");

    return (
        <header className="page_header">
            <a href="#!" className="logo">Need for drive</a>
            <div className="location">
                <div className="location__icon">
                    <img src={iconLocation} alt="iconLocation" />
                </div>
                <div 
                    type="text" 
                    id="location_input" 
                    className="location__locality"
                    style={{width: `${locationValue.length * 8}px`}}
                >
                    {locationValue}
                </div>
            </div>
        </header>
    )
}

export default Header;
