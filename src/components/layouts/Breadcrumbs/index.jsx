import React from "react";
import {Link} from 'react-router-dom';

import {breadscrumbs} from "../../../assets/db";

import "./Breadcrumbs.scss";

function Breadscrumbs() {
    return (
        <nav className="breadscrumbs">
            {Object.keys(breadscrumbs).map((link) => (
                <Link key={link} to={breadscrumbs[link]}>{link}</Link>
            ))}
        </nav>
    )
}

export default Breadscrumbs
