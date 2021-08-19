import React, {useContext} from 'react';
import {Link} from 'react-router-dom';

import { AppContext } from '../../../context';

import iconLocation from "../../../assets/images/location_icon.svg";

import "./Header.scss";

function Header() {
    const {choosenTown} = useContext(AppContext);

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
                    style={choosenTown && {width: `${choosenTown.name.length * 8}px`}}
                >
                    {choosenTown && choosenTown.name}
                </div>
            </div>
        </header>
    )
}

export default Header;
