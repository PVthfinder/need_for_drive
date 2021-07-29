import React,{useState} from 'react';

import iconLocation from "../../assets/images/location_icon.svg";

import "./Header.scss";

function Header() {
    const [locationValue, setLocationValue] = useState("Ульяновск");

    return (
        <header className="page_header">
            <a href="#!" className="logo">Need for drive</a>
            <div className="location">
                <label for="location_input" className="location__icon">
                    <img src={iconLocation} alt="iconLocation" />
                </label>
                <input 
                    type="text" 
                    id="location_input" 
                    className="location__locality"
                    onChange={(event) => {setLocationValue(event.target.value)}}
                    value={locationValue}
                    style={{width: `${locationValue.length * 8}px`}}
                    autoComplete="on"
                />
            </div>
        </header>
    )
}

export default Header;
